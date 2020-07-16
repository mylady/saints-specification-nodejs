/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prisonRemindType = {
  newEntryTalk: {
    name: '入所谈话',
    value: 0
  },
  transitionTalk: {
    name: '过度阶段谈话',
    value: 1
  },
  stateChangeTalk: {
    name: '环节变动谈话',
    value: 2
  },
  roomChangeTalk: {
    name: '监室变动谈话',
    value: 3
  },
  spySetting: {
    name: '耳目设置',
    value: 4
  },
  patrol: {
    name: '巡视',
    value: 100
  }
};
Object.freeze(prisonRemindType);
var _default = prisonRemindType;
exports["default"] = _default;