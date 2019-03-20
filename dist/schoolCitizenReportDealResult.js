'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var schoolCitizenReportDealResult = {
  processing: {
    name: '正在处理',
    value: 0
  },
  reject: {
    name: '退回重派',
    value: 1
  },
  onTime: {
    name: '按期完结',
    value: 2
  },
  overTime: {
    name: '超期完结',
    value: 3
  }
};
Object.freeze(schoolCitizenReportDealResult);
var _default = schoolCitizenReportDealResult;
exports.default = _default;