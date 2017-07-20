/**
 * Created by wulei on 17-5-5.
 */
'use strict';

module.exports.plan = {
    name: '计划任务',
    value: 0
};
module.exports.event = {
    name: '事件任务',
    value: 1
};
module.exports.custom = {
    name: '自定义任务',
    value: 2
};

Object.freeze(module.exports);