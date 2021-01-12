import { CodeMap } from './code-map';

export class DoorValue {
    person_name: string;
    person_card: string;
    scene_image: string;
    scene_image_path: string;

    constructor(card: string, name?: string, sceneImage?: string, sceneImagePath?: string) {
        this.person_card = card;
        this.person_name = name;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
    }
}

export class EnvMonitorValue {
    temp: number;
    humi: number;
    hcho: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;

    constructor(temp: number, humi: number, hcho: number = 0, co2: number = 0, pm25: number = 0, tvoc: number = 0, n3h: number = 0, h2s: number = 0) {
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
    volter: number;
    elec: number;
    constructor(v: number, e: number) {
        this.volter = v;
        this.elec = e;
    }
}

export class RFIDTagValue {
    x: number;
    y: number;
    z: number;
    tag_id: string;
    person_id: string;
    person_name: string;
    battery: number;
    heart_rate: number;
    blood_presssure_high: number;
    blood_presssure_low: number;

    constructor(x: number, y: number, z: number, tagId: string, personId: string, personName: string, battery: number, heartRate?: number, bph?: number, bpl?: number) {
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
    backup_time: string;
    battery: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;

    constructor(backupTime: string, battry: string, aVolter?: number, bVolter?: number, cVolter?: number, aElec?: number, bElec?: number, cElec?: number) {
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
    caller: string;
    called: string;

    constructor(caller: string, called: string) {
        this.caller = caller;
        this.called = called;
    }
}

export const VideoAnalyseType = {
    behavior: CodeMap.from('行为分析', 0),
    face: CodeMap.from('人脸识别', 1),
    carPlate: CodeMap.from('车牌识别', 2)
}

export class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image: string;
    face_image_path: string;

    constructor(personId: string, personName: string, similarity: number, faceImage?: string, faceImagePath?: string) {
        this.person_id = personId;
        this.person_name = personName;
        this.similarity = similarity;
        this.face_image = faceImage;
        this.face_image_path = faceImagePath;
    }
}

export class CarPlate {
    plate_number: string;
    plate_color: string;
    plate_type: string;
    car_color: string;

    constructor(plateNumber: string, plateColor?: string, plateType?: string, carColor?: string) {
        this.plate_number = plateNumber;
        this.plate_color = plateColor;
        this.plate_type = plateType;
        this.car_color = carColor;
    }
}

export class VideoAnalyseValue {
    analyse_type: number;
    scene_image: string;
    scene_image_path: string;
    face: Face;
    car: CarPlate;

    constructor(analyseType: number, sceneImage?: string, sceneImagePath?: string, face?: Face, car?: CarPlate) {
        this.analyse_type = analyseType;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
        this.face = face;
        this.car = car;
    }
}