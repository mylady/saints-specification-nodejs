/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var TransmitMessage = function TransmitMessage() {
  (0, _classCallCheck2.default)(this, TransmitMessage);
  this.MessageId = '';
  this.MessageType = -1;
  this.MessageContent = '';
  this.MessageTime = new Date();
  this.MessageReceiver = [];
};

exports.default = TransmitMessage;