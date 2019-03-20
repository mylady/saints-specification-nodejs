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

var DigitalLayout = function DigitalLayout() {
  (0, _classCallCheck2.default)(this, DigitalLayout);
  this.Width = 0;
  this.Height = 0;
  this.FullScreen = false;
  this.BackgroundImage = '';
  this.BackgroundAudio = ''; //this is DigitalLayoutArea array

  this.Areas = [];
};

exports.default = DigitalLayout;