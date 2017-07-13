/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

module.exports.nonPicked = {
    name: '未分配',
    value: 0
};
module.exports.dispatched = {
    name: '已分配',
    value: 1
};
module.exports.working = {
    name: '处理中',
    value: 2
};
module.exports.transfer = {
    name: '需流转',
    value: 3
};
module.exports.needConfirm = {
    name: '已完成,待确认',
    value: 4
};
module.exports.done = {
    name: '已完成',
    value: 5
};
module.exports.misReport = {
    name: '误报',
    value: 6
};

Object.freeze(module.exports);