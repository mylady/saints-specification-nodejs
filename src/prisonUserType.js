/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

let prisonUserType = {
  admin: {
    name: '管理员',
    value: 0
  },
  police: {
    name: '分控干警',
    value: 1
  },
  doctor: {
    name: '医生',
    value: 2
  },
  arraignPolice:{
    name:'提押干警',
    value:3
  },
  meetingRegisterPolice:{
    name:'登记干警',
    value:4
  },
  registerArraignPolice:{
    name:'登记和提押干警',
    value:5
  }
};

Object.freeze(prisonUserType);
export default prisonUserType;