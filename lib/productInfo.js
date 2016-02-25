/**
 * Created by MyLady on 16/2/19.
 */
'use strict';


function ProductInfo() {
    if (!(this instanceof ProductInfo)) {
        return new ProductInfo();
    }

    this.ProductName = '';
    this.ProductId = '';
    this.DisplayName = '';
    this.ProductType = -1;
    this.VersionNumber = '1.0';
    this.VersionCode = 1;
    this.InstallPath = '';
    this.OS = -1;
}

module.exports = ProductInfo;