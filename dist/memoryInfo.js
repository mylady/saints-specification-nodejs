/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MemoryInfo = function MemoryInfo() {
    _classCallCheck(this, MemoryInfo);

    this.TotalMemory = 0;
    this.UsedMemory = 0;
    this.FreeMemory = 0;
    this.MemoryPercent = '';
};

module.exports = MemoryInfo;