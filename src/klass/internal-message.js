'use strict';

//for backend service message exchange
export default class InternalMessage {
    constructor({ internal_type, message_content }) {
        this.internal_type = internal_type || 0;
        this.message_content = message_content || '';
    }

    static isValid(message) {
        return message.hasOwnProperty('message_content') &&
            message.hasOwnProperty('internal_type');
    }
}