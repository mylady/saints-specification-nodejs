'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var bioIdentifyType = {
    fingerPrint: {
        name: '指纹',
        value: 0
    },
    faceRecognition: {
        name: '人脸',
        value: 1
    },
    voicePrint: {
        name: '声纹',
        value: 2
    }
};

Object.freeze(bioIdentifyType);
exports.default = bioIdentifyType;