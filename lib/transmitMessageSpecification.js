/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

var TransmitMessageSpecification = {};

TransmitMessageSpecification.helloEvent = 'hello';
TransmitMessageSpecification.joinEvent = 'join_room';
TransmitMessageSpecification.leaveEvent = 'leave_room';
TransmitMessageSpecification.messageUpEvent = 'message_up';
TransmitMessageSpecification.messageDownEvent = 'message_down';


TransmitMessageSpecification.deviceEventRoom = 'device_event';
TransmitMessageSpecification.deviceStatusRoom = 'device_status';
TransmitMessageSpecification.deviceControlRoom = 'device_control';
TransmitMessageSpecification.digitalControlRoom = 'digital_control';
TransmitMessageSpecification.maintainRoom = 'maintain';
TransmitMessageSpecification.hospitalRoom = 'hospital';

TransmitMessageSpecification.saintsNameSpace = "saints";
TransmitMessageSpecification.thirdpartyNameSpace = "thirdparty";

module.exports = TransmitMessageSpecification;
