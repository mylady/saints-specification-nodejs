/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

const DigitalLayout = require('./digitalLayout')
    , DigitalMarquee = require('./digitalMarquee');

class DigitalCommand {
    constructor() {
        this.CommandType = 0;
        this.Layout = new DigitalLayout();
        this.Marquee = new DigitalMarquee();
        this.Speech = '';
        this.Value = '';
        this.ElapseTime = 0;
    }
}

module.exports = DigitalCommand;