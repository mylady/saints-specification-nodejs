/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiskInfo = function DiskInfo() {
    _classCallCheck(this, DiskInfo);

    this.TotalDiskSize = 0;
    this.UsedDiskSize = 0;
    this.FreeDiskSize = 0;
    this.DiskPercent = '';
};

module.exports = DiskInfo;