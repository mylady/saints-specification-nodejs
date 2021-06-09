import { CodeMap } from './code-map';
export class DoorValue {
    constructor(card, name, sceneImage, sceneImagePath) {
        this.person_card = card;
        this.person_name = name;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
    }
}
export class EnvMonitorValue {
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
export class PowerGridValue {
    constructor(v, e) {
        this.volter = v;
        this.elec = e;
    }
}
export class RFIDTagValue {
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
export class UPSValue {
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
export class CallValue {
    constructor(caller, called) {
        this.caller = caller;
        this.called = called;
    }
}
export const VideoAnalyseType = {
    behavior: CodeMap.from('行为分析', 0),
    face: CodeMap.from('人脸识别', 1),
    carPlate: CodeMap.from('车牌识别', 2)
};
export class Face {
    constructor(personId, personName, similarity, faceImage, faceImagePath) {
        this.person_id = personId;
        this.person_name = personName;
        this.similarity = similarity;
        this.face_image = faceImage;
        this.face_image_path = faceImagePath;
    }
}
export class CarPlate {
    constructor(plateNumber, plateColor, plateType, carColor) {
        this.plate_number = plateNumber;
        this.plate_color = plateColor;
        this.plate_type = plateType;
        this.car_color = carColor;
    }
}
export class VideoAnalyseValue {
    constructor(analyseType, sceneImage, sceneImagePath, face, car) {
        this.analyse_type = analyseType;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
        this.face = face;
        this.car = car;
    }
}
