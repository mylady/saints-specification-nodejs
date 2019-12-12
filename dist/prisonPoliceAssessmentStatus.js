/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _prisonPatrolRecordSt;

var prisonPatrolRecordStatus = (_prisonPatrolRecordSt = {
  manageConfirm: {
    name: '待民警确认',
    value: 0
  },
  adminAudit: {
    name: '待中队长审核',
    value: 1
  }
}, (0, _defineProperty2.default)(_prisonPatrolRecordSt, "adminAudit", {
  name: '待所领导审核',
  value: 2
}), (0, _defineProperty2.default)(_prisonPatrolRecordSt, "finish", {
  name: '完成',
  value: 3
}), _prisonPatrolRecordSt);
Object.freeze(prisonPatrolRecordStatus);
var _default = prisonPatrolRecordStatus;
exports.default = _default;