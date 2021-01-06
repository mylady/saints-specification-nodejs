"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_map_1 = require("./code-map");
const config_1 = require("./config");
const resource_code_1 = require("./resource-code");
const device_alarm_code_1 = require("./device-alarm-code");
const device_event_code_1 = require("./device-event-code");
const device_status_code_1 = require("./device-status-code");
const device_fault_code_1 = require("./device-fault-code");
const dimension_1 = require("./dimension");
const error_1 = require("./error");
const interface_category_1 = require("./interface-category");
const interface_value_1 = require("./interface-value");
const message_1 = require("./message");
const rest_1 = require("./rest");
const service_1 = require("./service");
const spec = {
    CodeMap: code_map_1.CodeMap,
    SpecError: error_1.SpecError,
    TwoDimension: dimension_1.TwoDimension,
    ThreeDimension: dimension_1.ThreeDimension,
    Config: config_1.Config,
    ResourceCode: resource_code_1.ResourceCode,
    InterfaceCategory: interface_category_1.InterfaceCategory,
    Message: message_1.Message,
    MessageTopics: message_1.MessageTopics,
    MessageType: message_1.MessageType,
    DeviceAlarmCode: device_alarm_code_1.DeviceAlarmCode,
    DeviceEventCode: device_event_code_1.DeviceEventCode,
    DeviceStatusCode: device_status_code_1.DeviceStatusCode,
    DeviceFaultCode: device_fault_code_1.DeviceFaultCode,
    EnvMonitorValue: interface_value_1.EnvMonitorValue,
    PowerGridValue: interface_value_1.PowerGridValue,
    UPSValue: interface_value_1.UPSValue,
    RFIDTagValue: interface_value_1.RFIDTagValue,
    CallValue: interface_value_1.CallValue,
    VideoAnalyseValue: interface_value_1.VideoAnalyseValue,
    VideoAnalyseType: interface_value_1.VideoAnalyseType,
    Face: interface_value_1.Face,
    CarPlate: interface_value_1.CarPlate,
    RestQuery: rest_1.RestQuery,
    RestResponse: rest_1.RestResponse,
    Service: service_1.Service,
    ServiceFinder: service_1.ServiceFinder,
    ServiceRegister: service_1.ServiceRegister,
    ServiceType: service_1.ServiceType
};
exports.default = spec;
module.exports = spec;
module.exports.default = spec;
