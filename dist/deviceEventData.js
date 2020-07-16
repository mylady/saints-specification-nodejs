/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var DeviceEventData = function DeviceEventData() {
  (0, _classCallCheck2["default"])(this, DeviceEventData);
  this.ResourceCode = -1;
  this.Address = '';
  this.EventType = 0;
  this.EventLevel = 0;
  this.EventCode = 0;
  this.AlarmCode = 0;
  this.EventTime = new Date();
  this.EventDescription = '';
  this.EventExtra = '';
};

exports["default"] = DeviceEventData;