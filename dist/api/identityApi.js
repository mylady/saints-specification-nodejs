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

var IdentityAPI =
/*#__PURE__*/
function () {
  function IdentityAPI(url) {
    (0, _classCallCheck2.default)(this, IdentityAPI);
    this.url = url;
    this.accessToken = '';
  }

  (0, _createClass2.default)(IdentityAPI, [{
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
                  uri: this.url + '/accesstoken',
                  json: true
                });

              case 2:
                res = _context.sent;

                if (!res.result) {
                  _context.next = 7;
                  break;
                }

                this.accessToken = res.data;
                _context.next = 8;
                break;

              case 7:
                throw new Error(res.error_msg);

              case 8:
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
    key: "getUserList",
    value: function () {
      var _getUserList = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.accessToken) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context2.next = 4;
                return rp({
                  method: 'GET',
                  uri: this.url + '/view/user',
                  qs: {
                    access_token: this.accessToken
                  },
                  json: true
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserList() {
        return _getUserList.apply(this, arguments);
      }

      return getUserList;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(auth) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.accessToken) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context3.next = 4;
                return rp({
                  method: 'POST',
                  uri: this.url + '/auth/login',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: auth,
                  json: true
                });

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(token) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.accessToken) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'POST',
                  uri: this.url + '/auth/logout',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: {
                    token: token
                  },
                  json: true
                });

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function logout(_x2) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "self",
    value: function () {
      var _self = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(token) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.accessToken) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context5.next = 4;
                return rp({
                  method: 'GET',
                  uri: this.url + '/self',
                  qs: {
                    access_token: this.accessToken
                  },
                  auth: {
                    bearer: token
                  },
                  json: true
                });

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function self(_x3) {
        return _self.apply(this, arguments);
      }

      return self;
    }()
  }]);
  return IdentityAPI;
}();

exports.default = IdentityAPI;
module.exports = IdentityAPI;