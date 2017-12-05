'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BioIdentifyMessage = function BioIdentifyMessage() {
    _classCallCheck(this, BioIdentifyMessage);

    this.IdentifyType = 0;
    this.IdentifyTime = new Date();
    this.IdenfityContent = '';
};

exports.default = BioIdentifyMessage;