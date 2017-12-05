'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FaceRecognition = function FaceRecognition() {
    _classCallCheck(this, FaceRecognition);

    this.CameraAddress = '';
    this.FaceImagePath = '';
    this.SceneImagePath = '';
    this.FaceX = 0;
    this.FaceY = 0;
    this.FaceWidth = 0;
    this.FaceHeight = 0;
    this.IsHit = false;
    this.HitImagePath = '';
};

exports.default = FaceRecognition;