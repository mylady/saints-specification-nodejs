/**
 * Created by wulei on 17-5-5.
 */

'use strict';

module.exports.unknown = {
    name: '未知类型',
    value: -1
};
module.exports.doorOpened = {
    name: '门打开',
    value: 0
};
module.exports.doorClosed = {
    name: '门关闭',
    value: 1
};
module.exports.flashOpen = {
    name: '刷卡开门',
    value: 2
};
module.exports.buttonOpen = {
    name: '按钮开门',
    value: 3
};
module.exports.listenSlave = {
    name: '监听分机',
    value: 4
};
module.exports.slaveCallin = {
    name: '分机呼入',
    value: 5
};
module.exports.masterCallin = {
    name: '主机呼入',
    value: 6
};
module.exports.dataUpdate = {
    name: '数据更新',
    value: 7
};

Object.freeze(module.exports);