"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEventData = exports.DeviceEventType = exports.InterfaceDescripter = exports.InterfaceInitParam = exports.DeviceControlParam = exports.DeviceControlCode = void 0;
const moment_1 = __importDefault(require("moment"));
exports.DeviceControlCode = {
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
class DeviceControlParam {
    constructor(sdk, control, receivers, sender, parameters) {
        this.sdk_code = sdk;
        this.control_code = control;
        this.receivers = receivers;
        this.sender = sender;
        this.parameters = parameters;
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
    constructor(serial, resourceCode, address, eventType, desp, eventCode = -1, alarmCode = -1, statusCode = -1, faultCode = -1, extra) {
        this.serial = serial;
        this.resource_code = resourceCode;
        this.address = address;
        this.event_type = eventType;
        this.event_code = eventCode;
        this.alarm_code = alarmCode;
        this.status_code = statusCode;
        this.fault_code = faultCode;
        this.event_time = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss');
        this.event_desp = desp;
        this.event_extra = extra;
    }
}
exports.DeviceEventData = DeviceEventData;
