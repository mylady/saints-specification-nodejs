/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonTreeNodeType = {
  none: {
    name: '无类型',
    value: 0
  },
  prisonDistrict: {
    name: '监区',
    value: 1
  },
  prisonCell: {
    name: '监房',
    value: 2
  },
  prisonBed: {
    name: '监床',
    value: 3
  },
  prisoner: {
    name: '在押人员',
    value: 4
  }
};

Object.freeze(prisonTreeNodeType);
exports.default = prisonTreeNodeType;