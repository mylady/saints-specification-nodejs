'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var EnvValue = function EnvValue() {
  (0, _classCallCheck2.default)(this, EnvValue);
  this.temp = 0.0;
  this.humi = 0.0;
  this.hcho = 0.0;
  this.co2 = 0.0;
  this.pm25 = 0.0;
  this.tvoc = 0.0;
  this.n3h = 0.0;
  this.h2s = 0.0;
};

exports.default = EnvValue;