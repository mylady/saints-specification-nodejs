/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

let prisonUserOperationType = {
  rollCall: {
    name: '点名',
    value: 0
  },
  patrol: {
    name: '巡视',
    value: 1
  },
  read: {
    name: '阅读',
    value: 2
  }
};

Object.freeze(prisonUserOperationType);
export default prisonUserOperationType;