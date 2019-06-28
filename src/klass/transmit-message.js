'use strict';

//for biz message exchange
export default class TransmitMessage {
    constructor({ message_type, messge_content,socket_io_id }) {
        this.message_type = message_type || 0;
        this.message_content = messge_content || '';
        this.socket_io_id = socket_io_id || '';
    }

    static isValid(message) {
        return message.hasOwnProperty('message_content') &&
            message.hasOwnProperty('message_type') &&
            message.hasOwnProperty('socket_io_id');
    }

    static isSocketIO(message) {
        return message.hasOwnProperty('socket_io_id') && message.socket_io_id;
    }
}