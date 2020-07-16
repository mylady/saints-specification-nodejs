'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deviceAlarmCode = _interopRequireDefault(require("./deviceAlarmCode"));

var deviceFaultCode = {
  videoLost: _deviceAlarmCode["default"].videoLost,
  audioLost: _deviceAlarmCode["default"].audioLost,
  diskFull: _deviceAlarmCode["default"].diskFull,
  diskFault: _deviceAlarmCode["default"].diskFault,
  offline: _deviceAlarmCode["default"].offline,
  disturb: _deviceAlarmCode["default"].disturb,
  powerAbnormal: _deviceAlarmCode["default"].powerAbnormal,
  videoQuality: _deviceAlarmCode["default"].videoQuality
};
Object.freeze(deviceFaultCode);
var _default = deviceFaultCode;
exports["default"] = _default;