'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonWorkNumberType = {
  policeLicense: {
    name: '警官证',
    value: 0
  },
  workLicense: {
    name: '工作证',
    value: 1
  },
  lawyerLicense: {
    name: '律师证',
    value: 2
  },
  other: {
    name: '其他',
    value: 3
  }
};
Object.freeze(prisonWorkNumberType);
var _default = prisonWorkNumberType;
exports.default = _default;