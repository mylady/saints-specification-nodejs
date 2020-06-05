'use strict'; //this is for server process not for client

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var RestQuery = function RestQuery(_ref) {
  var start = _ref.start,
      limit = _ref.limit,
      sort = _ref.sort,
      dir = _ref.dir,
      keyword = _ref.keyword;
  (0, _classCallCheck2["default"])(this, RestQuery);
  this.start = start || 0;
  this.limit = limit || 0;
  this.sort = sort || '';
  this.dir = dir || 'ASC';
  this.keyword = keyword || '';
};

exports["default"] = RestQuery;