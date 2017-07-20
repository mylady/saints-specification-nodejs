/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

import DigitalLayout from './digitalLayout';
import DigitalMarquee from './digitalMarquee';

export default class DigitalCommand {
    constructor() {
        this.CommandType = 0;
        this.Layout = new DigitalLayout();
        this.Marquee = new DigitalMarquee();
        this.Speech = '';
        this.Value = '';
        this.ElapseTime = 0;
    }
}