'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var BioIdentifyMessage = function BioIdentifyMessage() {
  (0, _classCallCheck2.default)(this, BioIdentifyMessage);
  this.IdentifyType = 0;
  this.IdentifyTime = new Date();
  this.IdenfityContent = '';
};

exports.default = BioIdentifyMessage;