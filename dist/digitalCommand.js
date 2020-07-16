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

var _digitalLayout = _interopRequireDefault(require("./digitalLayout"));

var _digitalMarquee = _interopRequireDefault(require("./digitalMarquee"));

var DigitalCommand = function DigitalCommand() {
  (0, _classCallCheck2["default"])(this, DigitalCommand);
  this.CommandType = 0;
  this.Layout = new _digitalLayout["default"]();
  this.Marquee = new _digitalMarquee["default"]();
  this.Speech = '';
  this.Value = '';
  this.ElapseTime = 0;
};

exports["default"] = DigitalCommand;