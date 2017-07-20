'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServiceDiscovery = exports.ServiceRegister = exports.ProductRegister = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by MyLady on 05/05/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _productInfo = require('./productInfo');

var _productInfo2 = _interopRequireDefault(_productInfo);

var _protocolService = require('./protocolService');

var _protocolService2 = _interopRequireDefault(_protocolService);

var _specificationSettings = require('./specificationSettings');

var _specificationSettings2 = _interopRequireDefault(_specificationSettings);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductRegister = exports.ProductRegister = function () {
    function ProductRegister(prod) {
        _classCallCheck(this, ProductRegister);

        if (!(prod instanceof _productInfo2.default)) {
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
                (0, _utils.post)(_specificationSettings2.default.discoveryApiProduct, _this._product).catch(function (err) {
                    console.log(err);
                });
            }, _specificationSettings2.default.registerInterval);
        }
    }, {
        key: 'stopRegister',
        value: function stopRegister() {
            clearInterval(this._timerId);
        }
    }]);

    return ProductRegister;
}();

var ServiceRegister = exports.ServiceRegister = function () {
    function ServiceRegister(proxy) {
        _classCallCheck(this, ServiceRegister);

        this._proxy = proxy;
        this._services = [];
        this._timerId = -1;
    }

    _createClass(ServiceRegister, [{
        key: 'addService',
        value: function addService(service) {
            if (!(service instanceof _protocolService2.default)) {
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

            var address = _specificationSettings2.default.discoveryApiService;
            if (this._proxy) {
                address = _specificationSettings2.default.proxyApiService.replace('ip', this._proxy);
            }
            this._timerId = setInterval(function () {
                for (var i = 0; i < _this2._services.length; i++) {
                    (0, _utils.post)(address, _this2._services[i]).catch(function (err) {
                        console.log(err);
                    });
                }
            }, _specificationSettings2.default.registerInterval);
        }
    }, {
        key: 'stopRegister',
        value: function stopRegister() {
            clearInterval(this._timerId);
        }
    }]);

    return ServiceRegister;
}();

var ServiceDiscovery = exports.ServiceDiscovery = function () {
    function ServiceDiscovery(proxy) {
        _classCallCheck(this, ServiceDiscovery);

        this._proxy = proxy;
    }

    _createClass(ServiceDiscovery, [{
        key: 'getServices',
        value: function getServices() {
            var address = _specificationSettings2.default.discoveryApiService;
            if (this._proxy) {
                address = _specificationSettings2.default.proxyApiService.replace('ip', this._proxy);
            }

            return new Promise(function (resolve, reject) {
                (0, _utils.get)(address).then(function (resp) {
                    resolve(resp);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'getService',
        value: function getService(serviceType) {
            var address = _specificationSettings2.default.discoveryApiService;
            if (this._proxy) {
                address = _specificationSettings2.default.proxyApiService.replace('ip', this._proxy);
            }

            return new Promise(function (resolve, reject) {
                var target = null;
                (0, _utils.get)(address).then(function (services) {
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