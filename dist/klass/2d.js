'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var TwoDimension = function TwoDimension(_ref) {
  var x = _ref.x,
      y = _ref.y;
  (0, _classCallCheck2.default)(this, TwoDimension);
  this.x = x || 0.0;
  this.y = y || 0.0;
};

exports.default = TwoDimension;