/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeviceControlParam = function DeviceControlParam() {
    _classCallCheck(this, DeviceControlParam);

    this.ControlCode = -1;
    this.InterfaceCode = 0;
    this.Address = '';
    this.Sender = '';
    this.Parameter = [];
};

module.exports = DeviceControlParam;