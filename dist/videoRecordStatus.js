/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var videoRecordStatus = {
    idle: {
        name: '未启动',
        value: 0
    },
    waiting: {
        name: '队列中',
        value: 1
    },
    running: {
        name: '下载中',
        value: 2
    },
    failure: {
        name: '失败',
        value: 3
    },
    finish: {
        name: '完成',
        value: 4
    }
};

Object.freeze(videoRecordStatus);
exports.default = videoRecordStatus;