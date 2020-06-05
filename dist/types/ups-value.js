'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var UPSValue = function UPSValue(_ref) {
  var volter = _ref.volter,
      elec = _ref.elec,
      backup_time = _ref.backup_time;
  (0, _classCallCheck2["default"])(this, UPSValue);
  this.volter = volter || 0.0;
  this.elec = elec || 0.0;
  this.backup_time = backup_time || 0.0;
};

exports["default"] = UPSValue;