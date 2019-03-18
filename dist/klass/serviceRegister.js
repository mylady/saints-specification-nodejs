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

var config = require('./../predefined/config'),
    rp = require('request-promise'),
    serviceIPHolder = "ip",
    serviceRegisterInterval = 10,
    registerAddress = "http://ip:".concat(config.serviceHubPort, "/rest/register");

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
      this.timer = setInterval(function () {
        registerService(_this.hub, _this.service);
      }, serviceRegisterInterval * 1000);
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
    var res;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return rp({
              method: 'POST',
              uri: url,
              body: service,
              json: true
            });

          case 3:
            res = _context.sent;

            if (!res.result) {
              console.error('register service failed', res.error_msg);
            }

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error('register service failed', _context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function registerService(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();