/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonMeetingType = {
  general: {
    name: '通用',
    value: 0
  },
  arraignment: {
    name: '提审',
    value: 1
  },
  lawyerMeeting: {
    name: '律师会见',
    value: 2
  },
  familyMeeting: {
    name: '家属会见',
    value: 3
  },
  signArraignment: {
    name: '签字提审',
    value: 4
  }
};

Object.freeze(prisonMeetingType);
exports.default = prisonMeetingType;