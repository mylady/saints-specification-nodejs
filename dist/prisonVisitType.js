'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prisonVisitType = {
  arraignment: {
    name: '提审',
    value: 0
  },
  lawyerMeeting: {
    name: '律师会见',
    value: 1
  },
  familyMeeting: {
    name: '家属会见',
    value: 2
  },
  court: {
    name: '法院',
    value: 3
  },
  observe: {
    name: '参观',
    value: 4
  },
  other: {
    name: '其他',
    value: 5
  }
};
Object.freeze(prisonVisitType);
var _default = prisonVisitType;
exports["default"] = _default;