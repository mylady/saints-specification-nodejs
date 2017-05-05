/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

const ProductInfo = require('./productInfo');

class TransmitMessageClient {
    constructor(){
        this.Product = new ProductInfo();
        this.IPAddresses = [];
        this.MacAddresses = [];
    }
}

module.exports = TransmitMessageClient;