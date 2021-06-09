import { CodeMap } from './code-map';
export declare class DoorValue {
    person_card: string;
    person_name?: string;
    scene_image?: string;
    scene_image_path?: string;
    constructor(card: string, name?: string, sceneImage?: string, sceneImagePath?: string);
}
export declare class EnvMonitorValue {
    temp: number;
    humi: number;
    hcho: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;
    constructor(temp: number, humi: number, hcho?: number, co2?: number, pm25?: number, tvoc?: number, n3h?: number, h2s?: number);
}
export declare class PowerGridValue {
    volter: number;
    elec: number;
    constructor(v: number, e: number);
}
export declare class RFIDTagValue {
    x: number;
    y: number;
    z: number;
    tag_id: string;
    person_id: string;
    person_name: string;
    battery: number;
    heart_rate?: number;
    blood_presssure_high?: number;
    blood_presssure_low?: number;
    constructor(x: number, y: number, z: number, tagId: string, personId: string, personName: string, battery: number, heartRate?: number, bph?: number, bpl?: number);
}
export declare class UPSValue {
    backup_time: string;
    battery: string;
    a_volter?: number;
    b_volter?: number;
    c_volter?: number;
    a_elec?: number;
    b_elec?: number;
    c_elec?: number;
    constructor(backupTime: string, battry: string, aVolter?: number, bVolter?: number, cVolter?: number, aElec?: number, bElec?: number, cElec?: number);
}
export declare class CallValue {
    caller: string;
    called: string;
    constructor(caller: string, called: string);
}
export declare const VideoAnalyseType: {
    behavior: CodeMap;
    face: CodeMap;
    carPlate: CodeMap;
};
export declare class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image?: string;
    face_image_path?: string;
    constructor(personId: string, personName: string, similarity: number, faceImage?: string, faceImagePath?: string);
}
export declare class CarPlate {
    plate_number: string;
    plate_color?: string;
    plate_type?: string;
    car_color?: string;
    constructor(plateNumber: string, plateColor?: string, plateType?: string, carColor?: string);
}
export declare class VideoAnalyseValue {
    analyse_type: number;
    scene_image?: string;
    scene_image_path?: string;
    face?: Face;
    car?: CarPlate;
    constructor(analyseType: number, sceneImage?: string, sceneImagePath?: string, face?: Face, car?: CarPlate);
}
