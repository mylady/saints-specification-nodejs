export class CallValue {
    constructor(opt) {
        this.caller = opt.caller;
        this.called = opt.called;
    }
}
export class DoorValue {
    constructor(opt) {
        this.person_card = opt.person_card || '';
        this.person_name = opt.person_name || '';
        this.scene_image = opt.scene_image || '';
        this.scene_image_path = opt.scene_image_path || '';
    }
}
export class EnvMonitorValue {
    constructor(opt) {
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
export class PowerGridValue {
    constructor(opt) {
        this.volter = opt.volter;
        this.elec = opt.elec;
    }
}
export class RFIDTagValue {
    constructor(opt) {
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
export class RelayValue {
    constructor(opt) {
        this.switch_state = opt.switch_state;
        this.enabled = opt.enabled;
    }
}
export class UPSValue {
    constructor(opt) {
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
export var VideoAnalyseType;
(function (VideoAnalyseType) {
    VideoAnalyseType[VideoAnalyseType["Behavior"] = 0] = "Behavior";
    VideoAnalyseType[VideoAnalyseType["Face"] = 1] = "Face";
    VideoAnalyseType[VideoAnalyseType["CarPlate"] = 2] = "CarPlate";
    VideoAnalyseType[VideoAnalyseType["Voice"] = 3] = "Voice";
})(VideoAnalyseType || (VideoAnalyseType = {}));
export class Face {
    constructor(opt) {
        this.person_id = opt.person_id;
        this.person_name = opt.person_name;
        this.similarity = opt.similarity;
        this.repo_id = opt.repo_id;
        this.face_image = opt.face_image;
        this.face_image_path = opt.face_image_path;
        this.repo_image = opt.repo_image;
        this.repo_image_path = opt.repo_image_path;
    }
}
export class CarPlate {
    constructor(opt) {
        this.plate_number = opt.plate_number;
        this.plate_color = opt.plate_color;
        this.plate_type = opt.plate_type;
        this.car_color = opt.car_color;
    }
}
export class VideoAnalyseValue {
    constructor(opt) {
        this.analyse_type = opt.analyse_type;
        this.video_path = opt.video_path;
        this.scene_image = opt.scene_image;
        this.scene_image_path = opt.scene_image_path;
        this.face = opt.face;
        this.car = opt.car;
    }
}
