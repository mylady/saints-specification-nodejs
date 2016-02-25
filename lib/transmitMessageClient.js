/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

var ProductInfo = require('./productInfo');

function TransmitMessageClient() {
    if (!(this instanceof TransmitMessageClient)) {
        return new TransmitMessageClient();
    }

    this.Product = new ProductInfo();
    this.IPAddresses = [];
    this.MacAddresses = [];
}

module.exports = TransmitMessageClient;