'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AirMonitorExtra = function AirMonitorExtra() {
    _classCallCheck(this, AirMonitorExtra);

    this.Temperature = 0.0;
    this.Humidity = 0.0;
    this.HCHO = 0.0;
    this.CO2 = 0.0;
    this.PM25 = 0.0;
    this.TVOC = 0.0;
};

exports.default = AirMonitorExtra;