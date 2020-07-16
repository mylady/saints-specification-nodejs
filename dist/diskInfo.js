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

var DiskInfo = function DiskInfo() {
  (0, _classCallCheck2["default"])(this, DiskInfo);
  this.TotalDiskSize = 0;
  this.UsedDiskSize = 0;
  this.FreeDiskSize = 0;
  this.DiskPercent = '';
};

exports["default"] = DiskInfo;