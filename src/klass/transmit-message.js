'use strict';

//for biz message exchange
export default class TransmitMessage {
    constructor({ type, content,id }) {
        this.message_type = type || 0;
        this.message_content = content || '';
        this.socket_io_id = id || '';
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