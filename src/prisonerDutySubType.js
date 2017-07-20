/**
 * Created by wulei on 17-5-5.
 */
'use strict';

let prisonerDutySubType = {
  AM1130PM1315: {
    name: '11:30-13:15',
    value: 0
  },
  PM2200AM0000: {
    name: '22:00-00:00',
    value: 1
  },
  AM0000AM0200: {
    name: '00:00-02:00',
    value: 2
  },
  AM0200AM0400: {
    name: '02:00-04:00',
    value: 3
  },
  AM0400AM0600: {
    name: '04:00-06:00',
    value: 4
  }
};

Object.freeze(prisonerDutySubType);
export default prisonerDutySubType;
