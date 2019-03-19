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
  function IdentityAPI() {
    (0, _classCallCheck2.default)(this, IdentityAPI);
  }

  (0, _createClass2.default)(IdentityAPI, [{
    key: "getUserList",
    value: function () {
      var _getUserList = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (IdentityAPI.accessToken) {
                  _context.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context.next = 4;
                return rp({
                  method: 'GET',
                  uri: IdentityAPI.url + '/view/user',
                  qs: {
                    access_token: IdentityAPI.accessToken
                  },
                  json: true
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUserList() {
        return _getUserList.apply(this, arguments);
      }

      return getUserList;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(uid) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (IdentityAPI.accessToken) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context2.next = 4;
                return rp({
                  method: 'GET',
                  uri: IdentityAPI.url + "/view/user/".concat(uid),
                  qs: {
                    access_token: IdentityAPI.accessToken
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
        }, _callee2);
      }));

      function getUser(_x) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
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
                if (IdentityAPI.accessToken) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context3.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/auth/login',
                  qs: {
                    access_token: IdentityAPI.accessToken
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
        }, _callee3);
      }));

      function login(_x2) {
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
                if (IdentityAPI.accessToken) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/auth/logout',
                  qs: {
                    access_token: IdentityAPI.accessToken
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
        }, _callee4);
      }));

      function logout(_x3) {
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
                if (IdentityAPI.accessToken) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context5.next = 4;
                return rp({
                  method: 'GET',
                  uri: IdentityAPI.url + '/self',
                  qs: {
                    access_token: IdentityAPI.accessToken
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
        }, _callee5);
      }));

      function self(_x4) {
        return _self.apply(this, arguments);
      }

      return self;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(url) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                IdentityAPI.url = url;
                _context6.next = 3;
                return IdentityAPI.getAccessToken();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function initialize(_x5) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7() {
        var res;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/accesstoken',
                  json: true
                });

              case 2:
                res = _context7.sent;

                if (!res.result) {
                  _context7.next = 7;
                  break;
                }

                IdentityAPI.accessToken = res.data;
                _context7.next = 8;
                break;

              case 7:
                throw new Error(res.error_msg);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "isAvailable",
    value: function isAvailable() {
      return IdentityAPI.url && IdentityAPI.accessToken;
    }
  }]);
  return IdentityAPI;
}();

exports.default = IdentityAPI;
module.exports = IdentityAPI;