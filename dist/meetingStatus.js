/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var meetingStatus = {
  none: {
    name: '无状态',
    value: 0
  },
  waitingArraign: {
    name: '待提审',
    value: 1
  },
  arraigning: {
    name: '提审中',
    value: 2
  },
  endingArraign: {
    name: '提审待结束',
    value: 3
  },
  endArraign: {
    name: '提审结束',
    value: 4
  },
  waitingMeeting: {
    name: '待会见',
    value: 5
  },
  meeting: {
    name: '会见中',
    value: 6
  },
  endingMeeting: {
    name: '会见待结束',
    value: 7
  },
  endMeeting: {
    name: '会见结束',
    value: 8
  }
};

Object.freeze(meetingStatus);
exports.default = meetingStatus;