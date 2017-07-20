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
    name: '干警',
    value: 1
  },
  doctor: {
    name: '医生',
    value: 2
  }
};

Object.freeze(prisonUserType);
export default prisonUserType;