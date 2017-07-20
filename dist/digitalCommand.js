/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _digitalLayout = require('./digitalLayout');

var _digitalLayout2 = _interopRequireDefault(_digitalLayout);

var _digitalMarquee = require('./digitalMarquee');

var _digitalMarquee2 = _interopRequireDefault(_digitalMarquee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DigitalCommand = function DigitalCommand() {
    _classCallCheck(this, DigitalCommand);

    this.CommandType = 0;
    this.Layout = new _digitalLayout2.default();
    this.Marquee = new _digitalMarquee2.default();
    this.Speech = '';
    this.Value = '';
    this.ElapseTime = 0;
};

exports.default = DigitalCommand;