/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

var TransmitMessageType = {};

TransmitMessageType.systemMessage = 0;
TransmitMessageType.update = 1;

TransmitMessageType.deviceEvent = 2;
TransmitMessageType.deviceStatus = 3;
TransmitMessageType.deviceControl = 4;
TransmitMessageType.digitalControl = 5;
TransmitMessageType.maintain = 6;
TransmitMessageType.hospital = 7;
TransmitMessageType.prison = 8;


module.exports = TransmitMessageType;