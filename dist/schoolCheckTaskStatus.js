'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var schoolCheckTaskStatus = {
  notStarted: {
    name: '未开始',
    value: 0
  },
  onGoing: {
    name: '进行中',
    value: 1
  },
  finish: {
    name: '已完成',
    value: 2
  }
};
Object.freeze(schoolCheckTaskStatus);
var _default = schoolCheckTaskStatus;
exports.default = _default;