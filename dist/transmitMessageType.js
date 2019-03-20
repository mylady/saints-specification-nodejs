/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var transmitMessageType = {
  systemMessage: {
    name: '系统事件',
    value: 0
  },
  update: {
    name: '系统更新',
    value: 1
  },
  deviceEvent: {
    name: '设备事件',
    value: 2
  },
  deviceStatus: {
    name: '设备状态',
    value: 3
  },
  deviceControl: {
    name: '设备控制',
    value: 4
  },
  digitalControl: {
    name: '数字内容控制',
    value: 5
  },
  maintain: {
    name: '运维通知',
    value: 6
  },
  hospital: {
    name: '医院信息',
    value: 7
  },
  prison: {
    name: '监管业务通知',
    value: 8
  },
  bioIdentify: {
    name: '生物识别通知',
    value: 9
  }
};
Object.freeze(transmitMessageType);
var _default = transmitMessageType;
exports.default = _default;