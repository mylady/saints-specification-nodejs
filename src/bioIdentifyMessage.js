'use strict';

export default class BioIdentifyMessage {
    constructor() {
        this.IdentifyType = 0;
        this.IdentifyTime = new Date();
        this.IdenfityContent = '';
    }
}