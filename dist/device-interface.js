"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEventData = exports.DeviceEventType = exports.InterfaceDescripter = exports.InterfaceInitParam = exports.DeviceControlParam = exports.DeviceControlCode = exports.VideoAnalyseValue = exports.CarPlate = exports.Face = exports.VideoAnalyseType = exports.CallValue = exports.UPSValue = exports.RFIDTagValue = exports.PowerGridValue = exports.EnvMonitorValue = exports.DoorValue = void 0;
const moment = require("moment");
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
    constructor(opt) {
        this.x = opt.x || 0;
        this.y = opt.y || 0;
        this.z = opt.z || 0;
        this.tag_id = opt.tag_id || '';
        this.person_id = opt.person_id || '';
        this.battery = opt.battery || 0;
        this.heart_rate = opt.heart_rate || 0;
        this.blood_pressure_high = opt.blood_pressure_high || 0;
        this.blood_pressure_low = opt.blood_pressure_low || 0;
    }
}
exports.RFIDTagValue = RFIDTagValue;
class UPSValue {
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
exports.UPSValue = UPSValue;
class CallValue {
    constructor(caller, called) {
        this.caller = caller;
        this.called = called;
    }
}
exports.CallValue = CallValue;
var VideoAnalyseType;
(function (VideoAnalyseType) {
    VideoAnalyseType[VideoAnalyseType["Behavior"] = 0] = "Behavior";
    VideoAnalyseType[VideoAnalyseType["Face"] = 1] = "Face";
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
exports.DeviceControlCode = {
    stopInterface: -1,
    awayArm: 0,
    stayArm: 1,
    disArm: 2,
    connectRelay: 3,
    disconnectRelay: 4,
    byPass: 5,
    cancelByPass: 6,
    callSlave: 7,
    listenSlave: 8,
    hangupSlave: 9,
    startBroadcast: 10,
    stopBroadcast: 11,
    setContent: 12,
    sesumeContent: 13,
    switchDecoderChannel: 14,
    switchMatrixChannel: 15,
    matrixPTZ: 16,
    matrixPreset: 17,
    tvWallLayout: 18,
    openDoor: 19,
    closeDoor: 20,
    resetArm: 21,
    stayClose: 22,
    resumeStatus: 23,
    voiceBroadcast: 24,
    openWindow: 25,
    closeWindow: 26,
    stopProcedure: 27,
    acOn: 28,
    acOff: 29,
    acMode: 30,
    acTemperature: 31,
    cmd: 32 //命令
};
class DeviceControlParam {
    constructor(sdk, control, receivers, parameters, sender) {
        this.sdk_code = sdk;
        this.control_code = control;
        this.receivers = receivers;
        this.parameters = parameters;
        this.sender = sender;
    }
}
exports.DeviceControlParam = DeviceControlParam;
class InterfaceInitParam {
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
exports.InterfaceInitParam = InterfaceInitParam;
class InterfaceDescripter {
    constructor(name, version, support, configable = false) {
        this.name = name;
        this.version = version;
        this.support_info = support;
        this.configable = configable;
    }
}
exports.InterfaceDescripter = InterfaceDescripter;
exports.DeviceEventType = {
    unknown: -1,
    status: 0,
    normal: 1,
    alarm: 2,
    fault: 3
};
class DeviceEventData {
    constructor(resourceCode, address, eventType, desp, eventCode = -1, alarmCode = -1, statusCode = -1, faultCode = -1, extra) {
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
exports.DeviceEventData = DeviceEventData;