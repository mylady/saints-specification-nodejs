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
    request = require('request'),
    rp = require('request-promise');

var FileHubAPI =
/*#__PURE__*/
function () {
  function FileHubAPI(url) {
    _classCallCheck(this, FileHubAPI);

    this.url = url;
    this.accessToken = '';
  }

  _createClass(FileHubAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
    key: "uploadDocProxy",
    value: function uploadDocProxy(req, res) {
      if (!this.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: this.hub + '/upload/doc',
        qs: {
          access_token: this.accessToken
        }
      })).pipe(res);
    }
  }, {
    key: "uploadImageProxy",
    value: function uploadImageProxy(req, res) {
      if (!this.accessToken) {
        throw new Error('please get access token first');
      }

      req.pipe(request({
        method: 'POST',
        uri: this.hub + '/upload/image',
        qs: {
          access_token: this.accessToken
        }
      })).pipe(res);
    }
  }]);

  return FileHubAPI;
}();

exports.default = FileHubAPI;