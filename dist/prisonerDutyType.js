/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonerDutyType = {
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
var _default = prisonerDutyType;
exports.default = _default;