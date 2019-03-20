'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var AirMonitorExtra = function AirMonitorExtra() {
  (0, _classCallCheck2.default)(this, AirMonitorExtra);
  this.Temperature = 0.0;
  this.Humidity = 0.0;
  this.HCHO = 0.0;
  this.CO2 = 0.0;
  this.PM25 = 0.0;
  this.TVOC = 0.0;
  this.N3H = 0.0;
  this.H2S = 0.0;
};

exports.default = AirMonitorExtra;