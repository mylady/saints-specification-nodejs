'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var prisonMeetingReservationStatus = {
  cancel: {
    name: '已取消',
    value: 0
  },
  ongoing: {
    name: '已预约',
    value: 1
  },
  finished: {
    name: '已结束',
    value: 2
  }
};
Object.freeze(prisonMeetingReservationStatus);
var _default = prisonMeetingReservationStatus;
exports.default = _default;