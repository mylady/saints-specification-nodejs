'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonMeetingStatus = {
  waiting: {
    name: '等待中',
    value: 0
  },
  ongoing: {
    name: '进行中',
    value: 1
  },
  finished: {
    name: '已结束',
    value: 2
  },
  canceled: {
    name: '已取消',
    value: 3
  },
  bringOut: {
    name: '需带出',
    value: 4
  },
  bringIn: {
    name: '需带入',
    value: 5
  },
  fingerBegin: {
    name: '指纹开始',
    value: 6
  },
  fingerEnd: {
    name: '指纹结束',
    value: 7
  }
};

Object.freeze(prisonMeetingStatus);
exports.default = prisonMeetingStatus;