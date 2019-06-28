'use strict';

const transmitMessageType = {
    '0':'设备状态',
    '1':'设备事件',
    '2':'设备控制',
    '99':'自定义',
    '100':'其他'
};

Object.freeze(transmitMessageType);
export default transmitMessageType;