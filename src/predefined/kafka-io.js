'use strict';

const KafkaIO = {
    internalTopic: 'internal',
    transmitTopic: 'transmit',
    ioEvent: 'message_arrived'
}

Object.freeze(KafkaIO);
module.exports = KafkaIO;