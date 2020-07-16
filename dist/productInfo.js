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

var ProductInfo = function ProductInfo() {
  (0, _classCallCheck2["default"])(this, ProductInfo);
  this.ProductName = '';
  this.ProductId = '';
  this.DisplayName = '';
  this.ProductType = -1;
  this.VersionNumber = '1.0';
  this.VersionCode = 1;
  this.InstallPath = '';
  this.OS = -1;
};

exports["default"] = ProductInfo;