/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

class DeviceControlParam{
    constructor(){
        this.ControlCode = -1;
        this.InterfaceCode = 0;
        this.Address = '';
        this.Sender = '';
        this.Parameter = [];
    }
}

module.exports = DeviceControlParam;