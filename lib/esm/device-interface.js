import moment from 'moment';
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
    constructor(opt) {
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
export class CallValue {
    constructor(caller, called) {
        this.caller = caller;
        this.called = called;
    }
}
export var VideoAnalyseType;
(function (VideoAnalyseType) {
    VideoAnalyseType[VideoAnalyseType["Behavior"] = 0] = "Behavior";
    VideoAnalyseType[VideoAnalyseType["Face"] = 1] = "Face";
    VideoAnalyseType[VideoAnalyseType["CarPlate"] = 2] = "CarPlate";
})(VideoAnalyseType || (VideoAnalyseType = {}));
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
export const DeviceControlCode = {
    awayArm: 0,
    stayArm: 1,
    disArm: 2,
    connectRelay: 3,
    disconnectRelay: 4,
    byPass: 5,
    cancelByPass: 6,
    query: 7,
    callSlave: 8,
    listenSlave: 9,
    hangupSlave: 10,
    startBroadcast: 11,
    stopBroadcast: 12,
    setContent: 13,
    sesumeContent: 14,
    switchDecoderChannel: 15,
    switchMatrixChannel: 16,
    matrixPTZ: 17,
    matrixPreset: 18,
    tvWallLayout: 19,
    openDoor: 20,
    closeDoor: 21,
    resetArm: 22,
    stayClose: 23,
    resumeStatus: 24,
    voiceBroadcast: 25,
    openWindow: 26,
    closeWindow: 27,
    stopProcedure: 28,
    acOn: 29,
    acOff: 30,
    acMode: 31,
    acTemperature: 32,
    cmd: 33,
    enableInterface: 65500,
    disableInterface: 65501,
    startInterface: 65502,
    stopInterface: 65503
};
export class DeviceControlParam {
    constructor(sdk, control, receivers, sender, parameters) {
        this.sdk_code = sdk;
        this.control_code = control;
        this.receivers = receivers;
        this.sender = sender;
        this.parameters = parameters;
    }
}
export class InterfaceInitParam {
    constructor(opt) {
        this.remote_service_address = opt.remote_service_address || '';
        this.remote_ip_address = opt.remote_ip_address || '';
        this.remote_port = opt.remote_port || 0;
        this.local_port = opt.local_port || 0;
        this.user_name = opt.user_name || '';
        this.user_pwd = opt.user_pwd || '';
        this.com_port = opt.com_port || '';
        this.baud_rate = opt.baud_rate || 9600;
        this.data_bits = opt.data_bits || 8;
        this.stop_bits = opt.stop_bits || 1;
        this.parity = opt.parity || 0;
        this.connection_string = opt.connection_string || '';
        this.extra = opt.extra || '';
    }
}
export class InterfaceDescripter {
    constructor(name, version, support, configable = false) {
        this.name = name;
        this.version = version;
        this.support_info = support;
        this.configable = configable;
    }
}
export const DeviceEventType = {
    unknown: -1,
    status: 0,
    normal: 1,
    alarm: 2,
    fault: 3
};
export class DeviceEventData {
    constructor(serial, resourceCode, address, eventType, desp, eventCode = -1, alarmCode = -1, statusCode = -1, faultCode = -1, extra) {
        this.serial = serial;
        this.resource_code = resourceCode;
        this.address = address;
        this.event_type = eventType;
        this.event_code = eventCode;
        this.alarm_code = alarmCode;
        this.status_code = statusCode;
        this.fault_code = faultCode;
        this.event_time = moment().format('YYYY-MM-DD HH:mm:ss');
        this.event_desp = desp;
        this.event_extra = extra;
    }
}
