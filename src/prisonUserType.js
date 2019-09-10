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
  arraignPolice: {
    name: '提押干警',
    value: 3
  },
  meetingRegisterPolice: {
    name: '登记干警',
    value: 4
  },
  registerArraignPolice: {
    name: '登记和提押干警',
    value: 5
  },
  districtPatrolPolice: {
    name: '分控巡控干警',
    value: 6
  },
  districtManagePolice: {
    name: '分控管教干警',
    value: 7
  },
  districtAdmin: {
    name: '监区管理员',
    value: 8
  },
  commandCenter: {
    name: '指挥中心',
    value: 9
  },
  leader: {
    name: '所领导',
    value: 10
  }
};

Object.freeze(prisonUserType);
export default prisonUserType;