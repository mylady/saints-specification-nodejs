'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var schoolCheckPlanStatus = {
  planning: {
    name: '计划中',
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
Object.freeze(schoolCheckPlanStatus);
var _default = schoolCheckPlanStatus;
exports["default"] = _default;