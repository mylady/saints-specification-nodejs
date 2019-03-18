'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Config = require('./../predefined/config'),
    util = require('util'),
    rp = require('request-promise'),
    setIntervalPromise = util.promisify(setInterval),
    serviceIPHolder = "ip",
    serviceRegisterInterval = 10,
    registerAddress = "http://ip:".concat(Config.serviceHubPort, "/rest/register");

var ServiceRegister =
/*#__PURE__*/
function () {
  function ServiceRegister(ip, service) {
    (0, _classCallCheck2.default)(this, ServiceRegister);
    this.running = false;
    this.timer = null;
    this.service = service;
    this.hub = registerAddress.replace(serviceIPHolder, ip);
  }

  (0, _createClass2.default)(ServiceRegister, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this.running) {
        return;
      }

      this.running = true;
      this.timer = setIntervalPromise(serviceRegisterInterval).then(function () {
        try {
          registerService(_this.hub, _this.service);
        } catch (err) {
          console.error('register service failed', err);
        }
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.running) {
        return;
      }

      if (this.timer) {
        this.running = false;
        clearInterval(this.timer);
      }
    }
  }]);
  return ServiceRegister;
}();

exports.default = ServiceRegister;

var registerService =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(url, service) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return rp({
              method: 'POST',
              uri: url,
              body: service,
              json: true
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registerService(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();