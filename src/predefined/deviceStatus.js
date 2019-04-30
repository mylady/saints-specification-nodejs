'use strict';

const deviceStatus = {
    '0':'正常',
    '1':'布防',
    '2':'撤防',
    '3':'打开',
    '4':'关闭',
    '5':'断开',
    '6':'闭合',
    '7':'报警',
    '8':'故障',
    '100':'未知'
};

Object.freeze(deviceStatus);
export default deviceStatus;