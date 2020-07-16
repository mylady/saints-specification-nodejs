/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var maintainRepairResult = {
  nonPicked: {
    name: '未分配',
    value: 0
  },
  dispatched: {
    name: '已分配',
    value: 1
  },
  working: {
    name: '处理中',
    value: 2
  },
  transfer: {
    name: '需流转',
    value: 3
  },
  needConfirm: {
    name: '已完成,待确认',
    value: 4
  },
  done: {
    name: '已完成',
    value: 5
  },
  misReport: {
    name: '误报',
    value: 6
  }
};
Object.freeze(maintainRepairResult);
var _default = maintainRepairResult;
exports["default"] = _default;