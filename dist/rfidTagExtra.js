'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RFIDTagExtra = function RFIDTagExtra() {
    _classCallCheck(this, RFIDTagExtra);

    this.TagId = '';
    this.PersonId = '';
    this.PersonName = '';
    this.BatteryVoltage = 0;
    this.HeartRate = 0;
    this.X = 0.0;
    this.Y = 0.0;
    this.Z = 0.0;
};

exports.default = RFIDTagExtra;