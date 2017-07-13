/**
 * Created by wulei on 17-5-5.
 */
'use strict';

module.exports.normalEvent = {
    name: '一般事件',
    value: 0
};
module.exports.alarmEvent = {
    name: '报警事件',
    value: 1
};
module.exports.statusEvent = {
    name: '状态时间',
    value: 2
};

Object.freeze(module.exports);