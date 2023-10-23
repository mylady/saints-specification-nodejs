export interface CallValueOption {
    caller: string;
    called: string;
}

export class CallValue {
    caller: string;
    called: string;

    constructor(opt: CallValueOption) {
        this.caller = opt.caller;
        this.called = opt.called;
    }
}

export interface DoorValueOption {
    person_name?: string;
    person_card: string;
    scene_image?: string;
    scene_image_path?: string;
}

export class DoorValue {
    person_name?: string;
    person_card: string;
    scene_image?: string;
    scene_image_path?: string;

    constructor(opt: DoorValueOption) {
        this.person_card = opt.person_card || '';
        this.person_name = opt.person_name || '';
        this.scene_image = opt.scene_image || '';
        this.scene_image_path = opt.scene_image_path || '';
    }
}

export interface EnvMonitorValueOption {
    temp: number;
    humi: number;
    hcho: number;
    co: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;
}

export class EnvMonitorValue {
    temp: number;
    humi: number;
    hcho: number;
    co: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;

    constructor(opt: EnvMonitorValueOption) {
        this.temp = opt.temp;
        this.humi = opt.humi;
        this.hcho = opt.hcho;
        this.co = opt.co;
        this.co2 = opt.co2;
        this.pm25 = opt.pm25;
        this.tvoc = opt.tvoc;
        this.n3h = opt.n3h;
        this.h2s = opt.h2s;
    }
}

export interface PowerGridValueOption {
    volter: number;
    elec: number;
}

export class PowerGridValue {
    volter: number;
    elec: number;
    constructor(opt: PowerGridValueOption) {
        this.volter = opt.volter;
        this.elec = opt.elec;
    }
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

export class RFIDTagValue {
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

    constructor(opt: RFIDTagValueOption) {
        this.map_id = opt.map_id || '';
        this.locator_id = opt.locator_id || '';
        this.x = opt.x || 0;
        this.y = opt.y || 0;
        this.z = opt.z || 0;
        this.tag_id = opt.tag_id || '';
        this.person_id = opt.person_id || '';
        this.person_name = opt.person_name || '';
        this.battery = opt.battery || 0;
        this.heart_rate = opt.heart_rate || 0;
        this.blood_pressure_high = opt.blood_pressure_high || 0;
        this.blood_pressure_low = opt.blood_pressure_low || 0;
    }
}

export interface RelayValueOption {
    switch_state: number;
    enabled: boolean;
}

export class RelayValue {
    switch_state: number;
    enabled: boolean;

    constructor(opt: RelayValueOption) {
        this.switch_state = opt.switch_state;
        this.enabled = opt.enabled;
    }
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

export class UPSValue {
    backup_time: string;
    battry: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;

    constructor(opt: UPSValueOption) {
        this.backup_time = opt.backup_time || '';
        this.battry = opt.battry || '';
        this.a_volter = opt.a_volter || 0;
        this.b_volter = opt.b_volter || 0;
        this.c_volter = opt.c_volter || 0;
        this.a_elec = opt.a_elec || 0;
        this.b_elec = opt.b_elec || 0;
        this.c_elec = opt.c_elec || 0;
    }
}

export enum VideoAnalyseType {
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

export class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image?: string;
    face_image_path?: string;

    constructor(opt: FaceOption) {
        this.person_id = opt.person_id;
        this.person_name = opt.person_name;
        this.similarity = opt.similarity;
        this.face_image = opt.face_image;
        this.face_image_path = opt.face_image_path;
    }
}

export interface CarPlateOption {
    plate_number: string;
    plate_color?: string;
    plate_type?: string;
    car_color?: string;
}

export class CarPlate {
    plate_number: string;
    plate_color?: string;
    plate_type?: string;
    car_color?: string;

    constructor(opt: CarPlateOption) {
        this.plate_number = opt.plate_number;
        this.plate_color = opt.plate_color;
        this.plate_type = opt.plate_type;
        this.car_color = opt.car_color;
    }
}

export interface VideoAnalyseValueOption {
    analyse_type: VideoAnalyseType;
    video_path?: string;
    scene_image?: string;
    scene_image_path?: string;
    face?: Face;
    car?: CarPlate;
}

export class VideoAnalyseValue {
    analyse_type: VideoAnalyseType;
    video_path?: string;
    scene_image?: string;
    scene_image_path?: string;
    face?: Face;
    car?: CarPlate;

    constructor(opt: VideoAnalyseValueOption) {
        this.analyse_type = opt.analyse_type;
        this.video_path = opt.video_path;
        this.scene_image = opt.scene_image;
        this.scene_image_path = opt.scene_image_path;
        this.face = opt.face;
        this.car = opt.car;
    }
}