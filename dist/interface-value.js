"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoAnalyseValue = exports.CarPlate = exports.Face = exports.VideoAnalyseType = exports.CallValue = exports.UPSValue = exports.RFIDTagValue = exports.PowerGridValue = exports.EnvMonitorValue = exports.DoorValue = void 0;
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
    constructor(x, y, battery, heartRate) {
        this.x = x;
        this.y = y;
        this.battery = battery;
        this.heart_rate = heartRate;
    }
}
exports.RFIDTagValue = RFIDTagValue;
class UPSValue {
    constructor(backupTime, aVolter, bVolter, cVolter, aElec, bElec, cElec) {
        this.backup_time = backupTime;
        this.av = aVolter;
        this.bv = bVolter;
        this.cv = cVolter;
        this.ae = aElec;
        this.be = bElec;
        this.ce = cElec;
    }
}
exports.UPSValue = UPSValue;
class CallValue {
    constructor(master, slave) {
        this.master = master;
        this.slave = slave;
    }
}
exports.CallValue = CallValue;
var VideoAnalyseType;
(function (VideoAnalyseType) {
    VideoAnalyseType[VideoAnalyseType["Face"] = 0] = "Face";
    VideoAnalyseType[VideoAnalyseType["Behavior"] = 1] = "Behavior";
    VideoAnalyseType[VideoAnalyseType["CarPlate"] = 2] = "CarPlate";
})(VideoAnalyseType = exports.VideoAnalyseType || (exports.VideoAnalyseType = {}));
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
    constructor(platenumber, plateColor, plateType, carColor) {
        this.plate_number = platenumber;
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
