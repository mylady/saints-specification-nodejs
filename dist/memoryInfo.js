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

var MemoryInfo = function MemoryInfo() {
  (0, _classCallCheck2["default"])(this, MemoryInfo);
  this.TotalMemory = 0;
  this.UsedMemory = 0;
  this.FreeMemory = 0;
  this.MemoryPercent = '';
};

exports["default"] = MemoryInfo;