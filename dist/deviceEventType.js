/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var deviceEventType = {
  normalEvent: {
    name: '一般事件',
    value: 0
  },
  alarmEvent: {
    name: '报警事件',
    value: 1
  },
  statusEvent: {
    name: '状态时间',
    value: 2
  }
};
Object.freeze(deviceEventType);
var _default = deviceEventType;
exports["default"] = _default;