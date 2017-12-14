'use strict';

let prisonBusinessType = {
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
  startFaceRollCall: {
    name: '开始人脸点名',
    value: 3
  },
  faceRollCallFeedback: {
    name: '人脸点名结果反馈',
    value: 4
  },
  faceRollCallCellEnd:{
    name:'监房点名结束',
    value:5
  },
  stopFaceRollCall:{
    name:'停止人脸点名',
    value:6
  }
};

Object.freeze(prisonBusinessType);
export default prisonBusinessType;