"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDiscovery = exports.ServiceRegister = exports.ProductRegister = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _productInfo = _interopRequireDefault(require("./productInfo"));

var _protocolService = _interopRequireDefault(require("./protocolService"));

var _specificationSettings = _interopRequireDefault(require("./specificationSettings"));

var _utils = require("./utils");

/**
 * Created by MyLady on 05/05/2017.
 */
var ProductRegister =
/*#__PURE__*/
function () {
  function ProductRegister(prod) {
    (0, _classCallCheck2.default)(this, ProductRegister);

    if (!(prod instanceof _productInfo.default)) {
      throw new Error('invalid parameter,must be instance of ProductInfo');
    }

    this._product = prod;
    this._timerId = -1;
  }

  (0, _createClass2.default)(ProductRegister, [{
    key: "startRegister",
    value: function startRegister() {
      var _this = this;

      this._timerId = setInterval(function () {
        (0, _utils.post)(_specificationSettings.default.discoveryApiProduct, _this._product).catch(function (err) {
          console.log(err);
        });
      }, _specificationSettings.default.registerInterval);
    }
  }, {
    key: "stopRegister",
    value: function stopRegister() {
      clearInterval(this._timerId);
    }
  }]);
  return ProductRegister;
}();

exports.ProductRegister = ProductRegister;

var ServiceRegister =
/*#__PURE__*/
function () {
  function ServiceRegister(proxy) {
    (0, _classCallCheck2.default)(this, ServiceRegister);
    this._proxy = proxy;
    this._services = [];
    this._timerId = -1;
  }

  (0, _createClass2.default)(ServiceRegister, [{
    key: "addService",
    value: function addService(service) {
      if (!(service instanceof _protocolService.default)) {
        throw new Error('invalid parameter,must be instance of ProtocolService');
      }

      this._services.push(service);
    }
  }, {
    key: "getServices",
    value: function getServices() {
      return this._services;
    }
  }, {
    key: "startRegister",
    value: function startRegister() {
      var _this2 = this;

      var address = _specificationSettings.default.discoveryApiService;

      if (this._proxy) {
        address = _specificationSettings.default.proxyApiService.replace('ip', this._proxy);
      }

      this._timerId = setInterval(function () {
        for (var i = 0; i < _this2._services.length; i++) {
          (0, _utils.post)(address, _this2._services[i]).catch(function (err) {
            console.log(err);
          });
        }
      }, _specificationSettings.default.registerInterval);
    }
  }, {
    key: "stopRegister",
    value: function stopRegister() {
      clearInterval(this._timerId);
    }
  }]);
  return ServiceRegister;
}();

exports.ServiceRegister = ServiceRegister;

var ServiceDiscovery =
/*#__PURE__*/
function () {
  function ServiceDiscovery(proxy) {
    (0, _classCallCheck2.default)(this, ServiceDiscovery);
    this._proxy = proxy;
  }

  (0, _createClass2.default)(ServiceDiscovery, [{
    key: "getServices",
    value: function getServices() {
      var address = _specificationSettings.default.discoveryApiService;

      if (this._proxy) {
        address = _specificationSettings.default.proxyApiService.replace('ip', this._proxy);
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
    key: "getService",
    value: function getService(serviceType) {
      var address = _specificationSettings.default.discoveryApiService;

      if (this._proxy) {
        address = _specificationSettings.default.proxyApiService.replace('ip', this._proxy);
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

exports.ServiceDiscovery = ServiceDiscovery;