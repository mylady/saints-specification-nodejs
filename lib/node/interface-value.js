"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoAnalyseValue = exports.CarPlate = exports.Face = exports.VideoAnalyseType = exports.CallValue = exports.UPSValue = exports.RFIDTagValue = exports.PowerGridValue = exports.EnvMonitorValue = exports.DoorValue = void 0;
const code_map_1 = require("./code-map");
class DoorValue {
    constructor(card, name, sceneImage, sceneImagePath) {
        this.person_card = card;
        this.person_name = name;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
    }
}
exports.DoorValue = DoorValue;
class EnvMonitorValue {
    constructor(temp, humi, hcho = 0, co2 = 0, pm25 = 0, tvoc = 0, n3h = 0, h2s = 0) {
        this.temp = temp;
        this.humi = humi;
        this.hcho = hcho;
        this.co2 = co2;
        this.pm25 = pm25;
        this.tvoc = tvoc;
        this.n3h = n3h;
        this.h2s = h2s;
    }
}
exports.EnvMonitorValue = EnvMonitorValue;
class PowerGridValue {
    constructor(v, e) {
        this.volter = v;
        this.elec = e;
    }
}
exports.PowerGridValue = PowerGridValue;
class RFIDTagValue {
    constructor(x, y, z, tagId, personId, personName, battery, heartRate, bph, bpl) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.tag_id = tagId;
        this.person_id = personId;
        this.person_name = personName;
        this.battery = battery;
        this.heart_rate = heartRate;
        this.blood_presssure_high = bph;
        this.blood_presssure_low = bpl;
    }
}
exports.RFIDTagValue = RFIDTagValue;
class UPSValue {
    constructor(backupTime, battry, aVolter, bVolter, cVolter, aElec, bElec, cElec) {
        this.backup_time = backupTime;
        this.battery = battry;
        this.a_volter = aVolter;
        this.b_volter = bVolter;
        this.c_volter = cVolter;
        this.a_elec = aElec;
        this.b_elec = bElec;
        this.c_elec = cElec;
    }
}
exports.UPSValue = UPSValue;
class CallValue {
    constructor(caller, called) {
        this.caller = caller;
        this.called = called;
    }
}
exports.CallValue = CallValue;
exports.VideoAnalyseType = {
    behavior: code_map_1.CodeMap.from('行为分析', 0),
    face: code_map_1.CodeMap.from('人脸识别', 1),
    carPlate: code_map_1.CodeMap.from('车牌识别', 2)
};
class Face {
    constructor(personId, personName, similarity, faceImage, faceImagePath) {
        this.person_id = personId;
        this.person_name = personName;
        this.similarity = similarity;
        this.face_image = faceImage;
        this.face_image_path = faceImagePath;
    }
}
exports.Face = Face;
class CarPlate {
    constructor(plateNumber, plateColor, plateType, carColor) {
        this.plate_number = plateNumber;
        this.plate_color = plateColor;
        this.plate_type = plateType;
        this.car_color = carColor;
    }
}
exports.CarPlate = CarPlate;
class VideoAnalyseValue {
    constructor(analyseType, sceneImage, sceneImagePath, face, car) {
        this.analyse_type = analyseType;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
        this.face = face;
        this.car = car;
    }
}
exports.VideoAnalyseValue = VideoAnalyseValue;
