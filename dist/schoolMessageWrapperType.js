'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var schoolMessageWrapperType = {
  checkTask: {
    name: '新巡查任务',
    value: 0
  },
  publishRedressTask: {
    name: '发布整改任务',
    value: 1
  },
  submitRedressTask: {
    name: '提交整改任务',
    value: 2
  },
  reviewRedressTask: {
    name: '复查整改任务',
    value: 3
  },
  rejectRedressTask: {
    name: '复查驳回任务',
    value: 4
  },
  finishRedressTask: {
    name: '整改任务完成',
    value: 5
  },
  instantReportTask: {
    name: '随手报任务',
    value: 6
  }
};
Object.freeze(schoolMessageWrapperType);
var _default = schoolMessageWrapperType;
exports["default"] = _default;