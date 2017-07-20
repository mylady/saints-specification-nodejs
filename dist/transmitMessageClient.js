/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _productInfo = require('./productInfo');

var _productInfo2 = _interopRequireDefault(_productInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransmitMessageClient = function TransmitMessageClient() {
    _classCallCheck(this, TransmitMessageClient);

    this.Product = new _productInfo2.default();
    this.IPAddresses = [];
    this.MacAddresses = [];
};

exports.default = TransmitMessageClient;