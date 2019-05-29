/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonMeetingRoomType = {
  general: {
    name: '通用',
    value: 0
  },
  arraignment: {
    name: '提审',
    value: 1
  },
  meeting: {
    name: '会见',
    value: 2
  },
  special:{
    name:'专用',
    value:3
  },
  other:{
    name:'其他',
    value:100
  }
};

Object.freeze(prisonMeetingRoomType);
export default prisonMeetingRoomType;