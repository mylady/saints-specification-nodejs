'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolCheckType = {
    centerCheck: {
        name: '教育局巡查',
        value: 0
    },
    selfCheck: {
        name: '学校自查',
        value: 1
    },
    specCheck: {
        name: '专项检查',
        value: 2
    }
};

Object.freeze(schoolCheckType);
exports.default = schoolCheckType;