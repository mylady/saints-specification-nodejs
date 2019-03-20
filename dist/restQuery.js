'use strict'; //this is for server process not for client

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var RestQuery = function RestQuery() {
  (0, _classCallCheck2.default)(this, RestQuery);
  this.Start = 0;
  this.Limit = 0;
  this.Sort = '';
  this.Direction = 'ASC';
  this.Search = '';
};

exports.default = RestQuery;