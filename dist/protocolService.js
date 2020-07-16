/**
 * Created by MyLady on 16/2/22.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var ProtocolService = function ProtocolService() {
  (0, _classCallCheck2["default"])(this, ProtocolService);
  this.ServiceName = '';
  this.ServiceAddress = '';
  this.ServicePort = -1;
  this.UserName = '';
  this.UserPwd = '';
  this.ServiceType = -1;
};

exports["default"] = ProtocolService;