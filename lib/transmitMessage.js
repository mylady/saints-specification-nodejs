/**
 * Created by MyLady on 16/2/19.
 */
'use strict';


class TransmitMessage {
    constructor() {
        this.MessageId = '';
        this.MessageType = -1;
        this.MessageContent = '';
        this.MessageTime = new Date();
        this.MessageReceiver = [];
    }
}

module.exports = TransmitMessage;