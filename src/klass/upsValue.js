'use strict';

export default class UPSValue {
    constructor({ volter, elec, backup_time }) {
        this.volter = volter || 0.0;
        this.elec = elec || 0.0;
        this.backup_time = backup_time || 0.0;
    }
}