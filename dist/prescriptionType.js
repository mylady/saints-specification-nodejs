/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prescriptionType = {
  st: {
    name: 'ST(立即服药)',
    value: 0
  },
  qd: {
    name: 'QD(每日一次)',
    value: 1
  },
  bid: {
    name: 'BID(每日两次)',
    value: 2
  },
  tid: {
    name: 'TID(每日三次)',
    value: 3
  },
  qid: {
    name: 'QID(每日四次)',
    value: 4
  },
  qn: {
    name: 'QN(每晚一次)',
    value: 5
  },
  qod: {
    name: 'QOD(隔日一次)',
    value: 6
  }
};

Object.freeze(prescriptionType);
exports.default = prescriptionType;