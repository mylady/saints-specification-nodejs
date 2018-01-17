'use strict';

let prisonTerminalType = {
    outsideTerminal: {
      name: '监外屏',
      value: 0
    },
    insideTerminal: {
      name: '监内机',
      value: 1
    },
    arraignTerminal:{
      name: '提审终端',
      value: 2
    },
    frontSideMeetingTerminal:{
      name: '提审会见展示终端',
      value: 3
    },
    backSideMeetingTemrinal:{
      name: '提押展示终端',
      value: 4
    }
  };
  
  Object.freeze(prisonTerminalType);
  export default prisonTerminalType;