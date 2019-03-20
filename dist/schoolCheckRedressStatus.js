'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var schoolCheckRedressStatus = {
  no: {
    name: '未整改',
    value: 0
  },
  wait: {
    name: '待整改',
    value: 1
  },
  review: {
    name: '审核中',
    value: 2
  },
  done: {
    name: '已整改',
    value: 3
  }
};
Object.freeze(schoolCheckRedressStatus);
var _default = schoolCheckRedressStatus;
exports.default = _default;