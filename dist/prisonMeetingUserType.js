'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonMeetingUserType = {
  police: {
    name: '干警',
    value: 0
  },
  lawyer: {
    name: '律师',
    value: 1
  },
  family: {
    name: '家属',
    value: 2
  },
  judical: {
    name: '检察官',
    value: 3
  },
  court: {
    name: '法院',
    value: 4
  },
  other: {
    name: '其他',
    value: 100
  }
};
Object.freeze(prisonMeetingUserType);
var _default = prisonMeetingUserType;
exports.default = _default;