'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolCheckRedressStatus = {
    no: {
        name: '未整改',
        value: 0
    },
    reviewings: {
        name: '审核中',
        value: 1
    },
    done: {
        name: '已整改',
        value: 2
    }
};

Object.freeze(schoolCheckRedressStatus);
exports.default = schoolCheckRedressStatus;