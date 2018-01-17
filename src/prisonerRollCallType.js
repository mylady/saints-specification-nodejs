'use strict';

let prisonerRollCallType= {
  terminalRollCall: {
    name: '终端点名',
    value: 0
  },
  faceRollCall: {
    name: '人脸点名',
    value: 1
  },
  voiceRollCall: {
    name: '声纹点名',
    value: 2
  }
};

Object.freeze(prisonerRollCallType);
export default prisonerRollCallType;