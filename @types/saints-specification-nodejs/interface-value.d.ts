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
    battery: number;
    heart_rate: number;
    constructor(x: number, y: number, battery: number, heartRate?: number);
}
export declare class UPSValue {
    backup_time: string;
    av: number;
    bv: number;
    cv: number;
    ae: number;
    be: number;
    ce: number;
    constructor(backupTime: string, aVolter?: number, bVolter?: number, cVolter?: number, aElec?: number, bElec?: number, cElec?: number);
}
export declare class CallValue {
    master: string;
    slave: string;
    constructor(master: string, slave: string);
}
export declare enum VideoAnalyseType {
    Face = 0,
    Behavior = 1,
    CarPlate = 2
}
export declare class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image: string;
    face_image_path: string;
    constructor(personId: string, personName: string, similarity: number, faceImage?: string, faceImagePath?: string);
}
export declare class CarPlate {
    plate_number: string;
    plate_color: string;
    plate_type: string;
    car_color: string;
    constructor(platenumber: string, plateColor?: string, plateType?: string, carColor?: string);
}
export declare class VideoAnalyseValue {
    analyse_type: VideoAnalyseType;
    scene_image: string;
    scene_image_path: string;
    face: Face;
    car: CarPlate;
    constructor(analyseType: VideoAnalyseType, sceneImage?: string, sceneImagePath?: string, face?: Face, car?: CarPlate);
}
