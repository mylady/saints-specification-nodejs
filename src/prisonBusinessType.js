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
  }
};

Object.freeze(prisonBusinessType);
export default prisonBusinessType;