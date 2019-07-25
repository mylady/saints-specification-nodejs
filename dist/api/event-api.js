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

var rp = require('request-promise');

var EventAPI =
/*#__PURE__*/
function () {
  function EventAPI() {
    (0, _classCallCheck2.default)(this, EventAPI);
    this.accessToken = '';
  }

  (0, _createClass2.default)(EventAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return rp({
                  method: 'POST',
                  uri: EventAPI.url + '/accesstoken',
                  json: true
                });

              case 2:
                res = _context.sent;
                this.accessToken = res.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "getRealEvent",
    value: function () {
      var _getRealEvent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(query) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context2.next = 5;
                return rp({
                  method: 'GET',
                  uri: EventAPI.url + '/real',
                  qs: query,
                  json: true
                });

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRealEvent(_x) {
        return _getRealEvent.apply(this, arguments);
      }

      return getRealEvent;
    }()
  }, {
    key: "getAlarmEvent",
    value: function () {
      var _getAlarmEvent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(query) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context3.next = 5;
                return rp({
                  method: 'GET',
                  uri: EventAPI.url + '/alarm',
                  qs: query,
                  json: true
                });

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAlarmEvent(_x2) {
        return _getAlarmEvent.apply(this, arguments);
      }

      return getAlarmEvent;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(url) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(typeof url !== 'string')) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('invalid url');

              case 2:
                if (url.lastIndexOf('/') === url.length - 1) {
                  EventAPI.url = url.substring(0, url.lastIndexOf('/'));
                } else {
                  EventAPI.url = url;
                }

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function initialize(_x3) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }]);
  return EventAPI;
}();

exports.default = EventAPI;