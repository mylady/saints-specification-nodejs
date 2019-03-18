'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var RFIDTagValue = function RFIDTagValue(_ref) {
  var x = _ref.x,
      y = _ref.y,
      battery = _ref.battery,
      heart_rate = _ref.heart_rate;
  (0, _classCallCheck2.default)(this, RFIDTagValue);
  this.x = 0.0;
  this.y = 0.0;
  this.battery = 0.0;
  this.heart_rate = 0.0;
};

exports.default = RFIDTagValue;