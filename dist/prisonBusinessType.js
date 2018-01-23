'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonBusinessType = {
  cellTerminalNotify: {
    name: '监外屏通知',
    value: 1
  },
  meetingArraignFeedback: {
    name: '提审会见反馈',
    value: 2
  },
  startFaceRollCall: {
    name: '开始人脸点名',
    value: 3
  },
  faceRollCallFeedback: {
    name: '人脸点名结果反馈',
    value: 4
  },
  faceRollCallCellEnd: {
    name: '监房点名结束',
    value: 5
  },
  stopFaceRollCall: {
    name: '停止人脸点名',
    value: 6
  },
  answerAlarm: {
    name: '应答报警',
    value: 7
  },
  dealingAlarm: {
    name: '处置报警',
    value: 8
  },
  dealedAlarm: {
    name: '报警处置结束',
    value: 9
  },
  meetingBatchBegin: {
    name: '提审会见批次开始',
    value: 10
  },
  meetingBatchEnd: {
    name: '提审会见批次结束',
    value: 11
  },
  meetingBringOut: {
    name: '提审会见带出',
    value: 12
  },
  meetingBringIn: {
    name: '提审会见带入',
    value: 13
  }
};

Object.freeze(prisonBusinessType);
exports.default = prisonBusinessType;