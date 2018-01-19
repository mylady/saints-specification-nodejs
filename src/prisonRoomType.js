/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonRoomType = {
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
  }
};

Object.freeze(prisonRoomType);
export default prisonRoomType;