"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_map_1 = require("./code-map");
const config_1 = require("./config");
const device_code_1 = require("./device-code");
const dimension_1 = require("./dimension");
const error_1 = require("./error");
const device_interface_1 = require("./device-interface");
const message_1 = require("./message");
const rest_1 = require("./rest");
const service_1 = require("./service");
const spec = {
    CodeMap: code_map_1.CodeMap,
    SpecError: error_1.SpecError,
    TwoDimension: dimension_1.TwoDimension,
    ThreeDimension: dimension_1.ThreeDimension,
    Config: config_1.Config,
    ResourceCode: device_code_1.ResourceCode,
    InterfaceCategory: device_code_1.InterfaceCategory,
    Message: message_1.Message,
    MessageTopic: message_1.MessageTopic,
    MessageType: message_1.MessageType,
    DeviceAlarmCode: device_code_1.DeviceAlarmCode,
    DeviceEventCode: device_code_1.DeviceEventCode,
    DeviceStatusCode: device_code_1.DeviceStatusCode,
    DeviceFaultCode: device_code_1.DeviceFaultCode,
    DoorValue: device_interface_1.DoorValue,
    EnvMonitorValue: device_interface_1.EnvMonitorValue,
    PowerGridValue: device_interface_1.PowerGridValue,
    UPSValue: device_interface_1.UPSValue,
    RFIDTagValue: device_interface_1.RFIDTagValue,
    CallValue: device_interface_1.CallValue,
    VideoAnalyseValue: device_interface_1.VideoAnalyseValue,
    VideoAnalyseType: device_interface_1.VideoAnalyseType,
    Face: device_interface_1.Face,
    CarPlate: device_interface_1.CarPlate,
    RestQuery: rest_1.RestQuery,
    RestResponse: rest_1.RestResponse,
    Service: service_1.Service,
    ServiceFinder: service_1.ServiceFinder,
    ServiceRegister: service_1.ServiceRegister,
    ServiceType: service_1.ServiceType,
    DeviceControlParam: device_interface_1.DeviceControlParam,
    InterfaceInitParam: device_interface_1.InterfaceInitParam,
    InterfaceDescripter: device_interface_1.InterfaceDescripter,
    DeviceEventType: device_interface_1.DeviceEventType,
    DeviceEventData: device_interface_1.DeviceEventData,
};
exports.default = spec;
module.exports = spec;
module.exports.default = spec;
