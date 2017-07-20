/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

class DiskInfo {
    constructor() {
        this.TotalDiskSize = 0;
        this.UsedDiskSize = 0;
        this.FreeDiskSize = 0;
        this.DiskPercent = '';
    }
}

module.exports = DiskInfo;