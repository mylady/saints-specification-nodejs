/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonerActivity = {
  stay: {
    name: '在监',
    value: 0
  },
  arraignment: {
    name: '提审',
    value: 1
  },
  lawMeeting: {
    name: '律师会见',
    value: 2
  },
  familyMeeting: {
    name: '家属会见',
    value: 3
  },
  identify: {
    name: '出所辨认',
    value: 4
  },
  outHospitalize: {
    name: '所外就医',
    value: 5
  },
  outHospitalized: {
    name: '外出住院',
    value: 6
  },
  court: {
    name: '开庭',
    value: 7
  },
  singleCell: {
    name: '单独关押',
    value: 8
  },
  encaged: {
    name: '禁闭',
    value: 9
  },
  judicialMeeting: {
    name: '司法会见',
    value: 10
  },
  other: {
    name: '其他',
    value: 100
  }
};
Object.freeze(prisonerActivity);
var _default = prisonerActivity;
exports.default = _default;