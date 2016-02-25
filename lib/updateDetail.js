/**
 * Created by MyLady on 16/2/25.
 */
'use strict';


function UpdateDetail() {
    if (!(this instanceof UpdateDetail)) {
        return new UpdateDetail();
    }

    this.ProductId = '';
    this.OS = -1;
    this.OldVersion = -1;
    this.NewVersion = -1;
    this.ShouldUpdate = false;
    this.UpdateAddress = '';
}

module.exports = UpdateDetail;