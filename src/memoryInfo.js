/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

class MemoryInfo{
    constructor(){
        this.TotalMemory = 0;
        this.UsedMemory = 0;
        this.FreeMemory = 0;
        this.MemoryPercent = '';
    }
}

module.exports = MemoryInfo;