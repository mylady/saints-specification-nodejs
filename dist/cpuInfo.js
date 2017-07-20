/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CpuInfo = function CpuInfo() {
    _classCallCheck(this, CpuInfo);

    this.CpuModel = '';
    this.CoreNumber = 0;
    this.CpuFrequency = 0.0;
    this.CpuLoad = '';
};

exports.default = CpuInfo;