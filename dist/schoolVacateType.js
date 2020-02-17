'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var schoolVacateType = {
  vacation: {
    name: '公休',
    value: 0
  },
  business: {
    name: '事假',
    value: 1
  },
  illness: {
    name: '病假',
    value: 2
  },
  exchange: {
    name: '调休',
    value: 3
  },
  other: {
    name: '其他',
    value: 100
  }
};
Object.freeze(schoolVacateType);
var _default = schoolVacateType;
exports.default = _default;