/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

const ProductInfo = require('./productInfo');

export default class TransmitMessageClient {
    constructor() {
        this.Product = new ProductInfo();
        this.IPAddresses = [];
        this.MacAddresses = [];
    }
}