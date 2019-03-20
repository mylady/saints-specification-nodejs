'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var schoolMessageType = {
  incipientFault: {
    name: '隐患',
    value: 0
  },
  notice: {
    name: '通知',
    value: 1
  },
  mail: {
    name: '邮件',
    value: 2
  },
  task: {
    name: '任务',
    value: 3
  },
  eventReport: {
    name: '事件上报',
    value: 4
  }
};
Object.freeze(schoolMessageType);
var _default = schoolMessageType;
exports.default = _default;