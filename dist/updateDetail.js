/**
 * Created by MyLady on 16/2/25.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var UpdateDetail = function UpdateDetail() {
  (0, _classCallCheck2.default)(this, UpdateDetail);
  this.ProductId = '';
  this.OS = -1;
  this.OldVersion = -1;
  this.NewVersion = -1;
  this.ShouldUpdate = false;
  this.UpdateAddress = '';
};

exports.default = UpdateDetail;