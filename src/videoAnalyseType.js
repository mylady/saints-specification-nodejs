/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

let videoAnalyseType = {
    behavior: {
        name: '行为分析',
        value: 0
    },
    faceRecognition: {
        name: '人脸识别',
        value: 1
    },
    carPlateRecognition: {
        name: '车牌识别',
        value: 2
    }
};

Object.freeze(videoAnalyseType);
export default videoAnalyseType;