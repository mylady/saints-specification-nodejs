'use strict';

//for backend service message exchange
export default class InternalMessage {
    constructor({ type, content }) {
        this.internal_type = type || 0;
        this.message_content = content || '';
    }

    static checkValid(message) {
        return message.hasOwnProperty('message_content') &&
            message.hasOwnProperty('internal_type');
    }
}