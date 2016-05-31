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

module.exports = TransmitMessage;