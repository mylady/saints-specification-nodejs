/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonMeetingRoomType = {
  general: {
    name: '通用',
    value: 0
  },
  arraignment: {
    name: '提审',
    value: 1
  },
  meeting: {
    name: '会见',
    value: 2
  },
  special: {
    name: '专用',
    value: 3
  }
};
Object.freeze(prisonMeetingRoomType);
var _default = prisonMeetingRoomType;
exports.default = _default;