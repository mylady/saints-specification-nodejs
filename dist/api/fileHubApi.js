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

var request = require('request'),
    rp = require('request-promise');
/*
    for upload file proxy,it uses nodejs default req&res object.
    if you use koa like framework,which wrapper req and res in context object
    you need set like koa, ctx.respond = false to interupt koa response
*/


var url = '';
var accessToken = '';

var FileHubAPI =
/*#__PURE__*/
function () {
  function FileHubAPI() {
    (0, _classCallCheck2.default)(this, FileHubAPI);
  }

  (0, _createClass2.default)(FileHubAPI, [{
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
                  uri: url + '/accesstoken',
                  json: true
                });

              case 2:
                res = _context.sent;

                if (!res.result) {
                  _context.next = 7;
                  break;
                }

                accessToken = res.data;
                _context.next = 8;
                break;

              case 7:
                throw new Error(res.error_msg);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "uploadDocProxy",
    value: function uploadDocProxy(req, res) {
      if (!accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: url + '/upload/doc',
        qs: {
          access_token: accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "searchDoc",
    value: function () {
      var _searchDoc = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(search) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (accessToken) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context2.next = 4;
                return rp({
                  method: 'POST',
                  uri: url + '/search/doc',
                  qs: {
                    access_token: accessToken
                  },
                  body: search,
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

      function searchDoc(_x) {
        return _searchDoc.apply(this, arguments);
      }

      return searchDoc;
    }()
  }, {
    key: "getDocDetail",
    value: function () {
      var _getDocDetail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (accessToken) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context3.next = 4;
                return rp({
                  method: 'GET',
                  uri: url + "/doc/detail/".concat(id),
                  qs: {
                    access_token: accessToken
                  },
                  body: search,
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

      function getDocDetail(_x2) {
        return _getDocDetail.apply(this, arguments);
      }

      return getDocDetail;
    }()
  }, {
    key: "getDocs",
    value: function () {
      var _getDocs = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(ids) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (accessToken) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'POST',
                  uri: url + '/query/doc',
                  qs: {
                    access_token: accessToken
                  },
                  body: ids,
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

      function getDocs(_x3) {
        return _getDocs.apply(this, arguments);
      }

      return getDocs;
    }()
  }, {
    key: "getDocURL",
    value: function () {
      var _getDocURL = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (accessToken) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context5.next = 4;
                return rp({
                  method: 'GET',
                  uri: url + "/doc/download/".concat(id),
                  qs: {
                    access_token: accessToken
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

      function getDocURL(_x4) {
        return _getDocURL.apply(this, arguments);
      }

      return getDocURL;
    }()
  }, {
    key: "uploadImageProxy",
    value: function uploadImageProxy(req, res) {
      if (!accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: url + '/upload/image',
        qs: {
          access_token: accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "getImageDetail",
    value: function () {
      var _getImageDetail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(id) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (accessToken) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context6.next = 4;
                return rp({
                  method: 'GET',
                  uri: url + "/image/detail/".concat(id),
                  qs: {
                    access_token: accessToken
                  },
                  body: search,
                  json: true
                });

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getImageDetail(_x5) {
        return _getImageDetail.apply(this, arguments);
      }

      return getImageDetail;
    }()
  }, {
    key: "getImages",
    value: function () {
      var _getImages = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(ids) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (accessToken) {
                  _context7.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context7.next = 4;
                return rp({
                  method: 'POST',
                  uri: url + '/query/image',
                  qs: {
                    access_token: accessToken
                  },
                  body: ids,
                  json: true
                });

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getImages(_x6) {
        return _getImages.apply(this, arguments);
      }

      return getImages;
    }()
  }, {
    key: "getImageURL",
    value: function () {
      var _getImageURL = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (accessToken) {
                  _context8.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context8.next = 4;
                return rp({
                  method: 'GET',
                  uri: url + "/image/download/".concat(id),
                  qs: {
                    access_token: accessToken
                  },
                  json: true
                });

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getImageURL(_x7) {
        return _getImageURL.apply(this, arguments);
      }

      return getImageURL;
    }()
  }, {
    key: "uploadAttachProxy",
    value: function uploadAttachProxy(req, res) {
      if (!accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: url + '/upload/attach',
        qs: {
          access_token: accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "getAttachDetail",
    value: function () {
      var _getAttachDetail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(id) {
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (accessToken) {
                  _context9.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context9.next = 4;
                return rp({
                  method: 'GET',
                  uri: url + "/attach/detail/".concat(id),
                  qs: {
                    access_token: accessToken
                  },
                  body: search,
                  json: true
                });

              case 4:
                return _context9.abrupt("return", _context9.sent);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getAttachDetail(_x8) {
        return _getAttachDetail.apply(this, arguments);
      }

      return getAttachDetail;
    }()
  }, {
    key: "getAttaches",
    value: function () {
      var _getAttaches = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(ids) {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (accessToken) {
                  _context10.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context10.next = 4;
                return rp({
                  method: 'POST',
                  uri: url + '/query/attach',
                  qs: {
                    access_token: accessToken
                  },
                  body: ids,
                  json: true
                });

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getAttaches(_x9) {
        return _getAttaches.apply(this, arguments);
      }

      return getAttaches;
    }()
  }, {
    key: "getAttachURL",
    value: function () {
      var _getAttachURL = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(id) {
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (accessToken) {
                  _context11.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context11.next = 4;
                return rp({
                  method: 'GET',
                  uri: url + "/attach/download/".concat(id),
                  qs: {
                    access_token: accessToken
                  },
                  json: true
                });

              case 4:
                return _context11.abrupt("return", _context11.sent);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getAttachURL(_x10) {
        return _getAttachURL.apply(this, arguments);
      }

      return getAttachURL;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(url) {
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                url = url;
                _context12.next = 3;
                return getAccessToken();

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function initialize(_x11) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }]);
  return FileHubAPI;
}();

exports.default = FileHubAPI;