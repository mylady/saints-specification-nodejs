'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by MyLady on 05/05/2017.
 */

var NicConfig = function NicConfig() {
    _classCallCheck(this, NicConfig);

    this.MacAddress = '';
    this.IPAddress = '';
    this.NetMask = '';
    this.Gateway = '';
    this.Name = '';
};

module.exports = NicConfig;