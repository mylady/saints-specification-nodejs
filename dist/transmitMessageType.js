/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

module.exports.systemMessage = {
    name: '系统事件',
    value: 0
};
module.exports.update = {
    name: '系统更新',
    value: 1
};
module.exports.deviceEvent = {
    name: '设备事件',
    value: 2
};
module.exports.deviceStatus = {
    name: '设备状态',
    value: 3
};
module.exports.deviceControl = {
    name: '设备控制',
    value: 4
};
module.exports.digitalControl = {
    name: '数字内容控制',
    value: 5
};
module.exports.maintain = {
    name: '运维通知',
    value: 6
};
module.exports.hospital = {
    name: '医院信息',
    value: 7
};
module.exports.prison = {
    name: '监管业务通知',
    value: 8
};

Object.freeze(module.exports);