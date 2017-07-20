/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DigitalLayout = require('./digitalLayout'),
    DigitalMarquee = require('./digitalMarquee');

var DigitalCommand = function DigitalCommand() {
    _classCallCheck(this, DigitalCommand);

    this.CommandType = 0;
    this.Layout = new DigitalLayout();
    this.Marquee = new DigitalMarquee();
    this.Speech = '';
    this.Value = '';
    this.ElapseTime = 0;
};

module.exports = DigitalCommand;