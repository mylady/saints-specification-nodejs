'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var faceRollCallStatus = {
    notStarted: {
        name: '未开始',
        value: 0
    },
    started: {
        name: '正在点名',
        value: 1
    },
    finished: {
        name: '点名结束',
        value: 2
    }
};

Object.freeze(faceRollCallStatus);
exports.default = faceRollCallStatus;