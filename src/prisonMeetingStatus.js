'use strict';

let prisonMeetingStatus= {
  waiting: {
    name: '等待中',
    value: 0
  },
  ongoing: {
    name: '进行中',
    value: 1
  },
  finished:{
    name:'已结束',
    value:2
  },
  canceled:{
    name:'已取消',
    value:3
  },
  bringOut:{
    name:'需带出',
    value:4
  },
  bringIn:{
    name:'需带入',
    value:5
  }
};

Object.freeze(prisonMeetingStatus);
export default prisonMeetingStatus;