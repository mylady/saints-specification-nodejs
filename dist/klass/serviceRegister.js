'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    _classCallCheck(this, ServiceRegister);

    this.running = false;
    this.timer = null;
    this.service = service;
    this.hub = registerAddress.replace(serviceIPHolder, ip);
  }

  _createClass(ServiceRegister, [{
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
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, service) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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