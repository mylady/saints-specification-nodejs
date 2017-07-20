/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonUserType = {
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
exports.default = prisonUserType;