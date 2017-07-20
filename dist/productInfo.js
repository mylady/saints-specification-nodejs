/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductInfo = function ProductInfo() {
    _classCallCheck(this, ProductInfo);

    this.ProductName = '';
    this.ProductId = '';
    this.DisplayName = '';
    this.ProductType = -1;
    this.VersionNumber = '1.0';
    this.VersionCode = 1;
    this.InstallPath = '';
    this.OS = -1;
};

module.exports = ProductInfo;