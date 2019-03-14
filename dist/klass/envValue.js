'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnvValue = function EnvValue() {
    _classCallCheck(this, EnvValue);

    this.temp = 0.0;
    this.humi = 0.0;
    this.hcho = 0.0;
    this.co2 = 0.0;
    this.pm25 = 0.0;
    this.tvoc = 0.0;
    this.n3h = 0.0;
    this.h2s = 0.0;
};

exports.default = EnvValue;