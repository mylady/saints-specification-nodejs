/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductInfo = require('./productInfo');

var TransmitMessageClient = function TransmitMessageClient() {
    _classCallCheck(this, TransmitMessageClient);

    this.Product = new ProductInfo();
    this.IPAddresses = [];
    this.MacAddresses = [];
};

module.exports = TransmitMessageClient;