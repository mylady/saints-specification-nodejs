'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by MyLady on 05/05/2017.
 */
var ProductInfo = require('./productInfo'),
    ProtocolService = require('./protocolService'),
    Settings = require('./specificationSettings'),
    Utils = require('./utils');

var ProductRegister = function () {
    function ProductRegister(prod) {
        _classCallCheck(this, ProductRegister);

        if (!(prod instanceof ProductInfo)) {
            throw new Error('invalid parameter,must be instance of ProductInfo');
        }
        this._product = prod;
        this._timerId = -1;
    }

    _createClass(ProductRegister, [{
        key: 'startRegister',
        value: function startRegister() {
            var _this = this;

            this._timerId = setInterval(function () {
                Utils.post(Settings.discoveryApiProduct, _this._product).catch(function (err) {
                    console.log(err);
                });
            }, Settings.registerInterval);
        }
    }, {
        key: 'stopRegister',
        value: function stopRegister() {
            clearInterval(this._timerId);
        }
    }]);

    return ProductRegister;
}();

var ServiceRegister = function () {
    function ServiceRegister(proxy) {
        _classCallCheck(this, ServiceRegister);

        this._proxy = proxy;
        this._services = [];
        this._timerId = -1;
    }

    _createClass(ServiceRegister, [{
        key: 'addService',
        value: function addService(service) {
            if (!(service instanceof ProtocolService)) {
                throw new Error('invalid parameter,must be instance of ProtocolService');
            }
            this._services.push(service);
        }
    }, {
        key: 'getServices',
        value: function getServices() {
            return this._services;
        }
    }, {
        key: 'startRegister',
        value: function startRegister() {
            var _this2 = this;

            var address = Settings.discoveryApiService;
            if (this._proxy) {
                address = Settings.proxyApiService.replace('ip', this._proxy);
            }
            this._timerId = setInterval(function () {
                for (var i = 0; i < _this2._services.length; i++) {
                    Utils.post(address, _this2._services[i]).catch(function (err) {
                        console.log(err);
                    });
                }
            }, Settings.registerInterval);
        }
    }, {
        key: 'stopRegister',
        value: function stopRegister() {
            clearInterval(this._timerId);
        }
    }]);

    return ServiceRegister;
}();

var ServiceDiscovery = function () {
    function ServiceDiscovery(proxy) {
        _classCallCheck(this, ServiceDiscovery);

        this._proxy = proxy;
    }

    _createClass(ServiceDiscovery, [{
        key: 'getServices',
        value: function getServices() {
            var address = Settings.discoveryApiService;
            if (this._proxy) {
                address = Settings.proxyApiService.replace('ip', this._proxy);
            }

            return new Promise(function (resolve, reject) {
                Utils.get(address).then(function (resp) {
                    resolve(resp);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'getService',
        value: function getService(serviceType) {
            var address = Settings.discoveryApiService;
            if (this._proxy) {
                address = Settings.proxyApiService.replace('ip', this._proxy);
            }

            return new Promise(function (resolve, reject) {
                var target = null;
                Utils.get(address).then(function (services) {
                    for (var i = 0; i < services.length; i++) {
                        if (services[i].ServiceType === serviceType) {
                            target = services[i];
                            break;
                        }
                    }

                    resolve(target);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }]);

    return ServiceDiscovery;
}();

module.exports.ProductRegister = ProductRegister;
module.exports.ServiceRegister = ServiceRegister;
module.exports.ServiceDiscovery = ServiceDiscovery;