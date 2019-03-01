'use strict';

let prisonMeetingTerminalType = {
  displayTerminal: {
    name: '监外屏',
    value: 0
  },
  operateTerminal: {
    name: '监内机',
    value: 1
  },
  queueCheckTerminal: {
    name: '提审终端',
    value: 2
  },
  prisonerCheckTerminal: {
    name: '提审会见展示终端',
    value: 3
  },
  displayPlate: {
    name: '电子门牌',
    value: 4
  }
};

Object.freeze(prisonMeetingTerminalType);
export default prisonMeetingTerminalType;