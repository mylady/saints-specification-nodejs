/**
 * Created by MyLady on 05/05/2017.
 */
import ProductInfo from './productInfo';
import ProtocolService from './protocolService';
import Settings from './specificationSettings';
import { post, get } from './utils';

export class ProductRegister {
    constructor(prod) {
        if (!(prod instanceof ProductInfo)) {
            throw new Error('invalid parameter,must be instance of ProductInfo');
        }
        this._product = prod;
        this._timerId = -1;
    }

    startRegister() {
        this._timerId = setInterval(() => {
            post(Settings.discoveryApiProduct, this._product)
                .catch((err) => {
                    console.log(err);
                });
        }, Settings.registerInterval);
    }

    stopRegister() {
        clearInterval(this._timerId);
    }
}

export class ServiceRegister {
    constructor(proxy) {
        this._proxy = proxy;
        this._services = [];
        this._timerId = -1;
    }

    addService(service) {
        if (!(service instanceof ProtocolService)) {
            throw new Error('invalid parameter,must be instance of ProtocolService');
        }
        this._services.push(service);
    }

    getServices() {
        return this._services;
    }

    startRegister() {
        let address = Settings.discoveryApiService;
        if (this._proxy) {
            address = Settings.proxyApiService.replace('ip', this._proxy);
        }
        this._timerId = setInterval(() => {
            for (let i = 0; i < this._services.length; i++) {
                post(address, this._services[i])
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }, Settings.registerInterval);
    }

    stopRegister() {
        clearInterval(this._timerId);
    }
}

export class ServiceDiscovery {
    constructor(proxy) {
        this._proxy = proxy;
    }

    getServices() {
        let address = Settings.discoveryApiService;
        if (this._proxy) {
            address = Settings.proxyApiService.replace('ip', this._proxy);
        }

        return new Promise((resolve, reject) => {
            get(address)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    getService(serviceType) {
        let address = Settings.discoveryApiService;
        if (this._proxy) {
            address = Settings.proxyApiService.replace('ip', this._proxy);
        }

        return new Promise((resolve, reject) => {
            let target = null;
            get(address)
                .then((services) => {
                    for (let i = 0; i < services.length; i++) {
                        if (services[i].ServiceType === serviceType) {
                            target = services[i];
                            break
                        }
                    }

                    resolve(target);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}
