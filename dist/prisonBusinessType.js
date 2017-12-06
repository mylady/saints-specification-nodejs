'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonBusinessType = {
  meetingArraignRecord: {
    name: '提审会见记录',
    value: 0
  },
  cellTerminalNotify: {
    name: '监外屏通知',
    value: 1
  },
  meetingArraignFeedback: {
    name: '提审会见反馈',
    value: 2
  },
  faceRollCallStart: {
    name: '人脸点名开始',
    value: 3
  },
  faceRollCallFeedback: {
    name: '人脸点名结果反馈',
    value: 4
  }
};

Object.freeze(prisonBusinessType);
exports.default = prisonBusinessType;