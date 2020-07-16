'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prisonMeetingQueueStatus = {
  wait: {
    name: '等待',
    value: 0
  },
  finish: {
    name: '完成',
    value: 1
  },
  cancel: {
    name: '取消',
    value: 2
  },
  outdated: {
    name: '过号',
    value: 3
  }
};
Object.freeze(prisonMeetingQueueStatus);
var _default = prisonMeetingQueueStatus;
exports["default"] = _default;