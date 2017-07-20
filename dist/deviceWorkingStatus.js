/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deviceWorkingStatus = {
    normal: {
        name: '正常',
        value: 0
    },
    fault: {
        name: '故障',
        value: 1
    }
};

Object.freeze(deviceWorkingStatus);
exports.default = deviceWorkingStatus;