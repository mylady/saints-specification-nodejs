/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var projectStatus = {
    preparing: {
        name: '筹备中',
        value: 0
    },
    constructing: {
        name: '施工中',
        value: 0
    },
    testing: {
        name: '试运行',
        value: 0
    },
    online: {
        name: '已上线',
        value: 3
    }
};

Object.freeze(projectStatus);
exports.default = projectStatus;