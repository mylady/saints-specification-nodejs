'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolCheckQuestionStatus = {
    editable: {
        name: '可编辑',
        value: 0
    },
    published: {
        name: '已发布',
        value: 1
    },
    obsolete: {
        name: '已弃用',
        value: 2
    }
};

Object.freeze(schoolCheckQuestionStatus);
exports.default = schoolCheckQuestionStatus;