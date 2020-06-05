'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var rp = require('request-promise'),
    config = require('../code/config'),
    serviceIPHolder = "ip",
    hubAddress = "http://ip:".concat(config.serviceHubPort, "/rest");

var ServiceFinder = /*#__PURE__*/function () {
  function ServiceFinder(ip) {
    (0, _classCallCheck2["default"])(this, ServiceFinder);
    this.hub = hubAddress.replace(serviceIPHolder, ip);
  }

  (0, _createClass2["default"])(ServiceFinder, [{
    key: "listService",
    value: function () {
      var _listService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return rp({
                  method: 'GET',
                  uri: this.hub + '/list',
                  json: true
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listService() {
        return _listService.apply(this, arguments);
      }

      return listService;
    }()
  }, {
    key: "searchService",
    value: function () {
      var _searchService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(serviceType) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return rp({
                  method: 'GET',
                  uri: this.hub + '/search',
                  qs: {
                    service_type: serviceType
                  },
                  json: true
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function searchService(_x) {
        return _searchService.apply(this, arguments);
      }

      return searchService;
    }()
  }]);
  return ServiceFinder;
}();

exports["default"] = ServiceFinder;