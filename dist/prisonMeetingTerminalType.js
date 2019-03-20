'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonMeetingTerminalType = {
  displayTerminal: {
    name: '显示终端',
    value: 0
  },
  operateTerminal: {
    name: '操作终端',
    value: 1
  },
  queueCheckTerminal: {
    name: '监区排队终端',
    value: 2
  },
  prisonerCheckTerminal: {
    name: '监区验证终端',
    value: 3
  },
  displayPlate: {
    name: '电子门牌',
    value: 4
  }
};
Object.freeze(prisonMeetingTerminalType);
var _default = prisonMeetingTerminalType;
exports.default = _default;