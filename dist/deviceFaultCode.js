'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _deviceAlarmCode = require('./deviceAlarmCode');

var _deviceAlarmCode2 = _interopRequireDefault(_deviceAlarmCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deviceFaultCode = {
    videoLost: _deviceAlarmCode2.default.videoLost,
    audioLost: _deviceAlarmCode2.default.audioLost,
    diskFull: _deviceAlarmCode2.default.diskFull,
    diskFault: _deviceAlarmCode2.default.diskFault,
    offline: _deviceAlarmCode2.default.offline,
    disturb: _deviceAlarmCode2.default.disturb,
    powerAbnormal: _deviceAlarmCode2.default.powerAbnormal,
    videoQuality: _deviceAlarmCode2.default.videoQuality
};

Object.freeze(deviceFaultCode);
exports.default = deviceFaultCode;