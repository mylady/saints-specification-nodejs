/**
 * Created by MyLady on 16/2/19.
 */
'use strict';


function TransmitMessage() {
    if (!(this instanceof TransmitMessage)) {
        return new TransmitMessage();
    }

    this.MessageId = '';
    this.MessageType = -1;
    this.MessageContent = '';
    this.MessageTime = new Date();
    this.MessageReceiver = [];
}

TransmitMessage.prototype.helloEvent = 'hello';
TransmitMessage.prototype.joinEvent = 'join_room';
TransmitMessage.prototype.leaveEvent = 'leave_room';
TransmitMessage.prototype.messageUpEvent = 'message_up';
TransmitMessage.prototype.messageDownEvent = 'message_down';
TransmitMessage.prototype.deviceEventRoom = 'device_event';
TransmitMessage.prototype.deviceStatusRoom = 'device_status';
TransmitMessage.prototype.deviceControlRoom = 'device_control';
TransmitMessage.prototype.digitalControlRoom = 'digital_control';
TransmitMessage.prototype.maintainRoom = 'maintain';
TransmitMessage.prototype.hospitalRoom = 'hospital';
TransmitMessage.prototype.saintsNameSpace = "saints";
TransmitMessage.prototype.thirdpartyNameSpace = "thirdparty";

module.exports = TransmitMessage;