'use strict';

let prisonMeetingUserType = {
  police: {
    name: '干警',
    value: 0
  },
  lawyer: {
    name: '律师',
    value: 1
  },
  relative: {
    name: '家属',
    value: 2
  },
  other:{
    name: '其他',
    value: 3
  }
};

Object.freeze(prisonMeetingUserType);
export default prisonMeetingUserType;