/**
 * Created by wulei on 17-5-5.
 */
'use strict';

let prisonerDutyType = {
  noon: {
    name: '午间值班',
    value: 0
  },
  night: {
    name: '夜间值班',
    value: 1
  },
  clean: {
    name: '大扫除',
    value: 2
  }
};

Object.freeze(prisonerDutyType);
export default prisonerDutyType;