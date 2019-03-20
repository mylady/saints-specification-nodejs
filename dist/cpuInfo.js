/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var CpuInfo = function CpuInfo() {
  (0, _classCallCheck2.default)(this, CpuInfo);
  this.CpuModel = '';
  this.CoreNumber = 0;
  this.CpuFrequency = 0.0;
  this.CpuLoad = '';
};

exports.default = CpuInfo;