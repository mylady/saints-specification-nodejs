'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var UPSValue = function UPSValue() {
  (0, _classCallCheck2.default)(this, UPSValue);
  this.volter = 0.0;
  this.elec = 0.0;
  this.backup_time = 0.0;
};

exports.default = UPSValue;