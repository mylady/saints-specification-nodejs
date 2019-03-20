'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var RFIDTagExtra = function RFIDTagExtra() {
  (0, _classCallCheck2.default)(this, RFIDTagExtra);
  this.TagId = '';
  this.PersonId = '';
  this.PersonName = '';
  this.BatteryVoltage = 0;
  this.HeartRate = 0;
  this.X = 0.0;
  this.Y = 0.0;
  this.Z = 0.0;
};

exports.default = RFIDTagExtra;