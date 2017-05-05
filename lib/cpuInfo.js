/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

class CpuInfo {
    constructor(){
        this.CpuModel = '';
        this.CoreNumber = 0;
        this.CpuFrequency = 0.0;
        this.CpuLoad = '';
    }
}

module.exports = CpuInfo;