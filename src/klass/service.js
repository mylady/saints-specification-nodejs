'use strict';

export default class Service {
    constructor({ address, type, priority }) {
        this.address = address || "";
        this.type = type || 0;
        this.priority = priority || 0;
    }
}