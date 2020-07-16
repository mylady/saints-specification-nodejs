/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var NicConfig = function NicConfig() {
  (0, _classCallCheck2["default"])(this, NicConfig);
  this.MacAddress = '';
  this.IPAddress = '';
  this.NetMask = '';
  this.Gateway = '';
  this.Name = '';
};

exports["default"] = NicConfig;