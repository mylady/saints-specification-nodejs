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
var DeviceControlCode;
(function (DeviceControlCode) {
    DeviceControlCode[DeviceControlCode["StopInterface"] = -1] = "StopInterface";
    DeviceControlCode[DeviceControlCode["AwayArm"] = 0] = "AwayArm";
    DeviceControlCode[DeviceControlCode["StayArm"] = 1] = "StayArm";
    DeviceControlCode[DeviceControlCode["DisArm"] = 2] = "DisArm";
    DeviceControlCode[DeviceControlCode["ConnectRelay"] = 3] = "ConnectRelay";
    DeviceControlCode[DeviceControlCode["DisconnectRelay"] = 4] = "DisconnectRelay";
    DeviceControlCode[DeviceControlCode["ByPass"] = 5] = "ByPass";
    DeviceControlCode[DeviceControlCode["CancelByPass"] = 6] = "CancelByPass";
    DeviceControlCode[DeviceControlCode["CallSlave"] = 7] = "CallSlave";
    DeviceControlCode[DeviceControlCode["ListenSlave"] = 8] = "ListenSlave";
    DeviceControlCode[DeviceControlCode["HangupSlave"] = 9] = "HangupSlave";
    DeviceControlCode[DeviceControlCode["StartBroadcast"] = 10] = "StartBroadcast";
    DeviceControlCode[DeviceControlCode["StopBroadcast"] = 11] = "StopBroadcast";
    DeviceControlCode[DeviceControlCode["SetContent"] = 12] = "SetContent";
    DeviceControlCode[DeviceControlCode["ResumeContent"] = 13] = "ResumeContent";
    DeviceControlCode[DeviceControlCode["SwitchDecoderChannel"] = 14] = "SwitchDecoderChannel";
    DeviceControlCode[DeviceControlCode["SwitchMatrixChannel"] = 15] = "SwitchMatrixChannel";
    DeviceControlCode[DeviceControlCode["MatrixPTZ"] = 16] = "MatrixPTZ";
    DeviceControlCode[DeviceControlCode["MatrixPreset"] = 17] = "MatrixPreset";
    DeviceControlCode[DeviceControlCode["TvWallLayout"] = 18] = "TvWallLayout";
    DeviceControlCode[DeviceControlCode["OpenDoor"] = 19] = "OpenDoor";
    DeviceControlCode[DeviceControlCode["CloseDoor"] = 20] = "CloseDoor";
    DeviceControlCode[DeviceControlCode["ResetArm"] = 21] = "ResetArm";
    DeviceControlCode[DeviceControlCode["StayClose"] = 22] = "StayClose";
    DeviceControlCode[DeviceControlCode["ResumeStatus"] = 23] = "ResumeStatus";
    DeviceControlCode[DeviceControlCode["VoiceBroadcast"] = 24] = "VoiceBroadcast";
    DeviceControlCode[DeviceControlCode["OpenWindow"] = 25] = "OpenWindow";
    DeviceControlCode[DeviceControlCode["CloseWindow"] = 26] = "CloseWindow";
    DeviceControlCode[DeviceControlCode["StopProcedure"] = 27] = "StopProcedure";
    DeviceControlCode[DeviceControlCode["AcOn"] = 28] = "AcOn";
    DeviceControlCode[DeviceControlCode["AcOff"] = 29] = "AcOff";
    DeviceControlCode[DeviceControlCode["AcMode"] = 30] = "AcMode";
    DeviceControlCode[DeviceControlCode["AcTemperature"] = 31] = "AcTemperature";
    DeviceControlCode[DeviceControlCode["Cmd"] = 32] = "Cmd"; //命令
})(DeviceControlCode = exports.DeviceControlCode || (exports.DeviceControlCode = {}));
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
var DeviceEventType;
(function (DeviceEventType) {
    DeviceEventType[DeviceEventType["Unknown"] = -1] = "Unknown";
    DeviceEventType[DeviceEventType["Status"] = 0] = "Status";
    DeviceEventType[DeviceEventType["Normal"] = 1] = "Normal";
    DeviceEventType[DeviceEventType["Alarm"] = 2] = "Alarm";
    DeviceEventType[DeviceEventType["Fault"] = 3] = "Fault";
})(DeviceEventType = exports.DeviceEventType || (exports.DeviceEventType = {}));
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
