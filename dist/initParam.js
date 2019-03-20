/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var InitParam = function InitParam() {
  (0, _classCallCheck2.default)(this, InitParam);
  this.RemoteIPAddress = '';
  this.RemotePort = 0;
  this.LocalPort = 0;
  this.UserName = '';
  this.UserPwd = '';
  this.RemoteServiceAddress = '';
  this.ComPort = '';
  this.BaudRate = 0;
  this.DataBits = 0;
  this.StopBits = 0;
  this.Parity = 0;
  this.ConnectionString = '';
  this.Extra = '';
};

exports.default = InitParam;