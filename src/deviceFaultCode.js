'use strict';

import deviceAlarmCode from './deviceAlarmCode';

let deviceFaultCode = {
    videoLost: deviceAlarmCode.videoLost,
    audioLost: deviceAlarmCode.audioLost,
    diskFull: deviceAlarmCode.diskFull,
    diskFault: deviceAlarmCode.diskFault,
    offline: deviceAlarmCode.offline,
    disturb: deviceAlarmCode.disturb,
    powerAbnormal: deviceAlarmCode.powerAbnormal,
    videoQuality: deviceAlarmCode.videoQuality
};

Object.freeze(deviceFaultCode);
export default deviceFaultCode;