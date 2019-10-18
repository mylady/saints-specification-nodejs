/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonClueStatus = {
  submit: {
    name: '待所领导确认',
    value: 0
  },
  confirmed: {
    name: '通过',
    value: 1
  },
  rejected: {
    name: '不通过',
    value: 2
  },
  review: {
    name: '退回',
    value: 3
  }
};
Object.freeze(prisonClueStatus);
var _default = prisonClueStatus;
exports.default = _default;