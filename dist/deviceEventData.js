/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeviceEventData = function DeviceEventData() {
    _classCallCheck(this, DeviceEventData);

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

exports.default = DeviceEventData;