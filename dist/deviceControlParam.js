/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var DeviceControlParam = function DeviceControlParam() {
  (0, _classCallCheck2.default)(this, DeviceControlParam);
  this.ControlCode = -1;
  this.InterfaceCode = 0;
  this.Receivers = [];
  this.Sender = '';
  this.Parameter = [];
};

exports.default = DeviceControlParam;