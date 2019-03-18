'use strict';

export default class RFIDTagValue {
    constructor({ x, y, battery, heart_rate }) {
        this.x = 0.0;
        this.y = 0.0;
        this.battery = 0.0;
        this.heart_rate = 0.0;
    }
}