'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deviceAlarmCode = require('./deviceAlarmCode');

var deviceFaultCode = {
    videoLost: deviceAlarmCode.videolost,
    audioLost: deviceAlarmCode.audioLost,
    diskFull: deviceAlarmCode.diskFull,
    diskFault: deviceAlarmCode.diskFault,
    offline: deviceAlarmCode.offline,
    disturb: deviceAlarmCode.disturb,
    powerAbnormal: deviceAlarmCode.powerAbnormal,
    videoQuality: deviceAlarmCode.videoQuality
};

Object.freeze(deviceFaultCode);
exports.default = deviceFaultCode;