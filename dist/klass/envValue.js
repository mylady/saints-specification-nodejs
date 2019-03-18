'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var EnvValue = function EnvValue(_ref) {
  var temp = _ref.temp,
      humi = _ref.humi,
      hcho = _ref.hcho,
      co2 = _ref.co2,
      pm25 = _ref.pm25,
      tvoc = _ref.tvoc,
      n3h = _ref.n3h,
      h2s = _ref.h2s;
  (0, _classCallCheck2.default)(this, EnvValue);
  this.temp = temp || 0.0;
  this.humi = humi || 0.0;
  this.hcho = hcho || 0.0;
  this.co2 = co2 || 0.0;
  this.pm25 = pm25 || 0.0;
  this.tvoc = tvoc || 0.0;
  this.n3h = n3h || 0.0;
  this.h2s = h2s || 0.0;
};

exports.default = EnvValue;