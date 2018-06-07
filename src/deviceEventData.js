/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

export default class DeviceEventData{
    constructor(){
        this.ResourceCode = -1;
        this.Address = '';
        this.EventType = 0;
        this.EventLevel = 0;
        this.EventCode = 0;
        this.AlarmCode = 0;
        this.EventTime = new Date();
        this.EventDescription = '';
        this.EventExtra = '';
    }
}