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


var FileHubAPI =
/*#__PURE__*/
function () {
  function FileHubAPI() {
    (0, _classCallCheck2.default)(this, FileHubAPI);
  }

  (0, _createClass2.default)(FileHubAPI, [{
    key: "uploadDocProxy",
    value: function uploadDocProxy(req, res) {
      if (!FileHubAPI.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: FileHubAPI.url + '/upload/doc',
        qs: {
          access_token: FileHubAPI.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "downloadDocProxy",
    value: function downloadDocProxy(id) {
      if (!FileHubAPI.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'GET',
        uri: FileHubAPI.url + "/download/doc/".concat(id),
        qs: {
          access_token: FileHubAPI.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "searchDoc",
    value: function () {
      var _searchDoc = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(search) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context.next = 4;
                return rp({
                  method: 'POST',
                  uri: FileHubAPI.url + '/search/doc',
                  qs: {
                    access_token: FileHubAPI.accessToken
                  },
                  body: search,
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
      _regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context2.next = 4;
                return rp({
                  method: 'GET',
                  uri: FileHubAPI.url + "/detail/doc/".concat(id),
                  qs: {
                    access_token: FileHubAPI.accessToken
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
      _regenerator.default.mark(function _callee3(ids) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context3.next = 4;
                return rp({
                  method: 'POST',
                  uri: FileHubAPI.url + '/query/doc',
                  qs: {
                    access_token: FileHubAPI.accessToken
                  },
                  body: ids,
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

      function getDocs(_x3) {
        return _getDocs.apply(this, arguments);
      }

      return getDocs;
    }()
  }, {
    key: "uploadImageProxy",
    value: function uploadImageProxy(req, res) {
      if (!FileHubAPI.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: FileHubAPI.url + '/upload/image',
        qs: {
          access_token: FileHubAPI.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "downloadAttachProxy",
    value: function downloadAttachProxy(id) {
      if (!FileHubAPI.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'GET',
        uri: FileHubAPI.url + "/download/image/".concat(id),
        qs: {
          access_token: FileHubAPI.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "getImageDetail",
    value: function () {
      var _getImageDetail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'GET',
                  uri: FileHubAPI.url + "/detail/image/".concat(id),
                  qs: {
                    access_token: FileHubAPI.accessToken
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

      function getImageDetail(_x4) {
        return _getImageDetail.apply(this, arguments);
      }

      return getImageDetail;
    }()
  }, {
    key: "getImages",
    value: function () {
      var _getImages = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(ids) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context5.next = 4;
                return rp({
                  method: 'POST',
                  uri: FileHubAPI.url + '/query/image',
                  qs: {
                    access_token: FileHubAPI.accessToken
                  },
                  body: ids,
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

      function getImages(_x5) {
        return _getImages.apply(this, arguments);
      }

      return getImages;
    }()
  }, {
    key: "uploadAttachProxy",
    value: function uploadAttachProxy(req, res) {
      if (!FileHubAPI.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: FileHubAPI.url + '/upload/attach',
        qs: {
          access_token: FileHubAPI.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "downloadAttachProxy",
    value: function downloadAttachProxy(id) {
      if (!FileHubAPI.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'GET',
        uri: FileHubAPI.url + "/download/attach/".concat(id),
        qs: {
          access_token: FileHubAPI.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "getAttachDetail",
    value: function () {
      var _getAttachDetail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(id) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context6.next = 4;
                return rp({
                  method: 'GET',
                  uri: FileHubAPI.url + "/detail/attach/".concat(id),
                  qs: {
                    access_token: FileHubAPI.accessToken
                  },
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

      function getAttachDetail(_x6) {
        return _getAttachDetail.apply(this, arguments);
      }

      return getAttachDetail;
    }()
  }, {
    key: "getAttaches",
    value: function () {
      var _getAttaches = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(ids) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (FileHubAPI.accessToken) {
                  _context7.next = 2;
                  break;
                }

                throw new Error('please get access token first');

              case 2:
                _context7.next = 4;
                return rp({
                  method: 'POST',
                  uri: FileHubAPI.url + '/query/attach',
                  qs: {
                    access_token: FileHubAPI.accessToken
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

      function getAttaches(_x7) {
        return _getAttaches.apply(this, arguments);
      }

      return getAttaches;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(url) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                FileHubAPI.url = url;
                _context8.next = 3;
                return FileHubAPI.getAccessToken();

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function initialize(_x8) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9() {
        var res;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return rp({
                  method: 'POST',
                  uri: FileHubAPI.url + '/accesstoken',
                  json: true
                });

              case 2:
                res = _context9.sent;

                if (!res.result) {
                  _context9.next = 7;
                  break;
                }

                FileHubAPI.accessToken = res.data;
                _context9.next = 8;
                break;

              case 7:
                throw new Error(res.error_msg);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "isAvailable",
    value: function isAvailable() {
      return FileHubAPI.url && FileHubAPI.accessToken;
    }
  }]);
  return FileHubAPI;
}();

exports.default = FileHubAPI;