/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

export default class DeviceControlParam{
    constructor(){
        this.ControlCode = -1;
        this.InterfaceCode = 0;
        this.Receivers = [];
        this.Sender = '';
        this.Parameter = [];
    }
}