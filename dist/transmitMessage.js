/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransmitMessage = function TransmitMessage() {
    _classCallCheck(this, TransmitMessage);

    this.MessageId = '';
    this.MessageType = -1;
    this.MessageContent = '';
    this.MessageTime = new Date();
    this.MessageReceiver = [];
};

exports.default = TransmitMessage;