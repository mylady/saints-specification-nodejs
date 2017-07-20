/**
 * Created by wulei on 17-5-5.
 */
'use strict';

module.exports.idle = {
    name: '未启动',
    value: 0
};
module.exports.waiting = {
    name: '队列中',
    value: 1
};
module.exports.running = {
    name: '下载中',
    value: 2
};
module.exports.failure = {
    name: '失败',
    value: 3
};
module.exports.finish = {
    name: '完成',
    value: 4
};

Object.freeze(module.exports);