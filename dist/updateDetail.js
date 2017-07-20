/**
 * Created by MyLady on 16/2/25.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateDetail = function UpdateDetail() {
    _classCallCheck(this, UpdateDetail);

    this.ProductId = '';
    this.OS = -1;
    this.OldVersion = -1;
    this.NewVersion = -1;
    this.ShouldUpdate = false;
    this.UpdateAddress = '';
};

exports.default = UpdateDetail;