/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeviceControlParam = function DeviceControlParam() {
    _classCallCheck(this, DeviceControlParam);

    this.ControlCode = -1;
    this.InterfaceCode = 0;
    this.Receivers = [];
    this.Sender = '';
    this.Parameter = [];
};

exports.default = DeviceControlParam;