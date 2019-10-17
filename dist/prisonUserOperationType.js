/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonUserOperationType = {
  rollCall: {
    name: '点名',
    value: 0
  },
  patrol: {
    name: '巡视',
    value: 1
  },
  read: {
    name: '阅读',
    value: 2
  }
};
Object.freeze(prisonUserOperationType);
var _default = prisonUserOperationType;
exports.default = _default;