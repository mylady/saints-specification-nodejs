/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonUserType = {
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
  }
};
Object.freeze(prisonUserType);
var _default = prisonUserType;
exports.default = _default;