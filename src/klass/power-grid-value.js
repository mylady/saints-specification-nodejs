'use strict';

export default class PowerGridValue {
    constructor({ volter, elec }) {
        this.volter = volter || 0.0;
        this.elec = elec || 0.0;
    }
}