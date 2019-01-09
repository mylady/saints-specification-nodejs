'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolVacateType = {
    vacation: {
        name: '公休',
        value: 0
    },
    business: {
        name: '事假',
        value: 1
    },
    illness: {
        name: '病假',
        value: 2
    },
    other: {
        name: '其他',
        value: 3
    }
};

Object.freeze(schoolVacateType);
exports.default = schoolVacateType;