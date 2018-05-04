'use strict';

const deviceAlarmCode = require('./deviceAlarmCode');

let deviceFaultCode = {
    videoLost: deviceAlarmCode.videolost,
    audioLost: deviceAlarmCode.audioLost,
    diskFull: deviceAlarmCode.diskFull,
    diskFault: deviceAlarmCode.diskFault,
    offline: deviceAlarmCode.offline,
    disturb: deviceAlarmCode.disturb,
    powerAbnormal: deviceAlarmCode.powerAbnormal,
    videoQuality: deviceAlarmCode.videoQuality
};

Object.freeze(deviceDataType);
export default deviceDataType;