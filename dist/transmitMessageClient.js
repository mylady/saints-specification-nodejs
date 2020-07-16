/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _productInfo = _interopRequireDefault(require("./productInfo"));

var TransmitMessageClient = function TransmitMessageClient() {
  (0, _classCallCheck2["default"])(this, TransmitMessageClient);
  this.Product = new _productInfo["default"]();
  this.IPAddresses = [];
  this.MacAddresses = [];
};

exports["default"] = TransmitMessageClient;