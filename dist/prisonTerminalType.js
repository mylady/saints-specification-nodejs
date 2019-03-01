'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonTerminalType = {
  outsideTerminal: {
    name: '监外屏',
    value: 0
  },
  insideTerminal: {
    name: '监内机',
    value: 1
  },
  arraignTerminal: {
    name: '提审终端',
    value: 2
  },
  frontSideMeetingTerminal: {
    name: '提审会见展示终端',
    value: 3
  },
  backSideMeetingTerminal: {
    name: '提押展示终端',
    value: 4
  },
  displayPlate: {
    name: '电子门牌',
    value: 5
  }
};

Object.freeze(prisonTerminalType);
exports.default = prisonTerminalType;