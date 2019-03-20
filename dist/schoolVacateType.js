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
  other: {
    name: '其他',
    value: 3
  }
};
Object.freeze(schoolVacateType);
var _default = schoolVacateType;
exports.default = _default;