'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolCheckTaskStatus = {
    notStarted: {
        name: '未开始',
        value: 0
    },
    onGoing: {
        name: '进行中',
        value: 1
    },
    finish: {
        name: '已完成',
        value: 2
    }
};

Object.freeze(schoolCheckTaskStatus);
exports.default = schoolCheckTaskStatus;