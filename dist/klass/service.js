'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Service = function Service(_ref) {
  var address = _ref.address,
      type = _ref.type,
      priority = _ref.priority;
  (0, _classCallCheck2.default)(this, Service);
  this.address = address || "";
  this.type = type || 0;
  this.priority = priority || 0;
};

exports.default = Service;