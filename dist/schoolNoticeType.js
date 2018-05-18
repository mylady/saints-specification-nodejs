'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolNoticeType = {
    noticeAll: {
        name: '所有人可见',
        value: 0
    },
    noticeSchool: {
        name: '学校可见',
        value: 1
    },
    noticeCenter: {
        name: '教育局可见',
        value: 2
    }
};

Object.freeze(schoolNoticeType);
exports.default = schoolNoticeType;