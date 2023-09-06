export interface CallValueOption {
    caller: string;
    called: string;
}
export declare class CallValue {
    caller: string;
    called: string;
    constructor(opt: CallValueOption);
}
export interface DoorValueOption {
    person_name?: string;
    person_card: string;
    scene_image?: string;
    scene_image_path?: string;
}
export declare class DoorValue {
    person_name?: string;
    person_card: string;
    scene_image?: string;
    scene_image_path?: string;
    constructor(opt: DoorValueOption);
}
export interface EnvMonitorValueOption {
    temp: number;
    humi: number;
    hcho: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;
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
    constructor(opt: EnvMonitorValueOption);
}
export interface PowerGridValueOption {
    volter: number;
    elec: number;
}
export declare class PowerGridValue {
    volter: number;
    elec: number;
    constructor(opt: PowerGridValueOption);
}
export interface RFIDTagValueOption {
    map_id?: string;
    locator_id?: string;
    x: number;
    y: number;
    z?: number;
    tag_id: string;
    person_id?: string;
    person_name?: string;
    battery: number;
    heart_rate?: number;
    blood_pressure_high?: number;
    blood_pressure_low?: number;
}
export declare class RFIDTagValue {
    map_id: string;
    locator_id: string;
    x: number;
    y: number;
    z: number;
    tag_id: string;
    person_id: string;
    person_name: string;
    battery: number;
    heart_rate: number;
    blood_pressure_high: number;
    blood_pressure_low: number;
    constructor(opt: RFIDTagValueOption);
}
export interface RelayValueOption {
    switch_state: number;
    enabled: boolean;
}
export declare class RelayValue {
    switch_state: number;
    enabled: boolean;
    constructor(opt: RelayValueOption);
}
export interface UPSValueOption {
    backup_time: string;
    battry: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;
}
export declare class UPSValue {
    backup_time: string;
    battry: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;
    constructor(opt: UPSValueOption);
}
export declare enum VideoAnalyseType {
    Behavior = 0,
    Face = 1,
    CarPlate = 2
}
export interface FaceOption {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image?: string;
    face_image_path?: string;
}
export declare class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image?: string;
    face_image_path?: string;
    constructor(opt: FaceOption);
}
export interface CarPlateOption {
    plate_number: string;
    plate_color?: string;
    plate_type?: string;
    car_color?: string;
}
export declare class CarPlate {
    plate_number: string;
    plate_color?: string;
    plate_type?: string;
    car_color?: string;
    constructor(opt: CarPlateOption);
}
export interface VideoAnalyseValueOption {
    analyse_type: VideoAnalyseType;
    scene_image?: string;
    scene_image_path?: string;
    face?: Face;
    car?: CarPlate;
}
export declare class VideoAnalyseValue {
    analyse_type: VideoAnalyseType;
    scene_image?: string;
    scene_image_path?: string;
    face?: Face;
    car?: CarPlate;
    constructor(opt: VideoAnalyseValueOption);
}
