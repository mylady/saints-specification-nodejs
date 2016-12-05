/**
 * Created by MyLady on 16/5/31.
 */
'use strict';

var TransmitMessageSpec = {};

TransmitMessageSpec.helloEvent = 'hello';
TransmitMessageSpec.joinEvent = 'join_room';
TransmitMessageSpec.leaveEvent = 'leave_room';
TransmitMessageSpec.messageUpEvent = 'message_up';
TransmitMessageSpec.messageDownEvent = 'message_down';
TransmitMessageSpec.deviceEventRoom = 'device_event';
TransmitMessageSpec.deviceStatusRoom = 'device_status';
TransmitMessageSpec.deviceControlRoom = 'device_control';
TransmitMessageSpec.digitalControlRoom = 'digital_control';
TransmitMessageSpec.maintainRoom = 'maintain';
TransmitMessageSpec.hospitalRoom = 'hospital';
TransmitMessageSpec.prisonRoom = 'prison';
TransmitMessageSpec.saintsNameSpace = "saints";
TransmitMessageSpec.thirdpartyNameSpace = "thirdparty";

module.exports = TransmitMessageSpec;