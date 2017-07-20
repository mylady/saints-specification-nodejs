/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NicConfig = function NicConfig() {
    _classCallCheck(this, NicConfig);

    this.MacAddress = '';
    this.IPAddress = '';
    this.NetMask = '';
    this.Gateway = '';
    this.Name = '';
};

exports.default = NicConfig;