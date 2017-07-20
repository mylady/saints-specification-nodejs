/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

let prisonerHealthStatus = {
  health: {
    name: '健康',
    value: 0
  },
  medicineCare: {
    name: '服药中',
    value: 1
  },
  importantCare: {
    name: '重点看护',
    value: 2
  }
};

Object.freeze(prisonerHealthStatus);

export default prisonerHealthStatus;