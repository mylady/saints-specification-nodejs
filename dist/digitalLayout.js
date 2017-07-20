/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DigitalLayout = function DigitalLayout() {
    _classCallCheck(this, DigitalLayout);

    this.Width = 0;
    this.Height = 0;
    this.FullScreen = false;
    this.BackgroundImage = '';
    this.BackgroundAudio = '';
    //this is DigitalLayoutArea array
    this.Areas = [];
};

module.exports = DigitalLayout;