'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var prisonMeetingQueueStatus = {
    wait: {
        name: '等待',
        value: 0
    },
    finish: {
        name: '完成',
        value: 1
    },
    cancel: {
        name: '取消',
        value: 2
    }
};

Object.freeze(prisonMeetingQueueStatus);
exports.default = prisonMeetingQueueStatus;