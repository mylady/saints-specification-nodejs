'use strict';

export default class RFIDTagValue {
    constructor({ x, y, battery, heart_rate }) {
        this.x = x || 0.0;
        this.y = y || 0.0;
        this.battery = battery || 0.0;
        this.heart_rate = heart_rate || 0.0;
    }
}