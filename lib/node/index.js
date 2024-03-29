"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = exports.ServiceRegister = exports.ServiceFinder = exports.Service = exports.RestResponse = exports.RestQuery = exports.MessageTopic = exports.MessageType = exports.Message = exports.CarPlate = exports.Face = exports.VideoAnalyseType = exports.VideoAnalyseValue = exports.CallValue = exports.RFIDTagValue = exports.UPSValue = exports.RelayValue = exports.PowerGridValue = exports.EnvMonitorValue = exports.DoorValue = exports.DeviceEventType = exports.DeviceEventData = exports.DeviceControlCode = exports.InterfaceDescripter = exports.InterfaceInitParam = exports.DeviceControlParam = exports.SpecError = exports.ThreeDimension = exports.TwoDimension = exports.VideoEncode = exports.InterfaceCategory = exports.DeviceFaultCode = exports.DeviceStatusCode = exports.DeviceEventCode = exports.AlarmProcessStatus = exports.DeviceAlarmCode = exports.ResourceCode = exports.Config = exports.CodeMap = void 0;
var code_map_1 = require("./code-map");
Object.defineProperty(exports, "CodeMap", { enumerable: true, get: function () { return code_map_1.CodeMap; } });
var config_1 = require("./config");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return config_1.Config; } });
var device_code_1 = require("./device-code");
Object.defineProperty(exports, "ResourceCode", { enumerable: true, get: function () { return device_code_1.ResourceCode; } });
Object.defineProperty(exports, "DeviceAlarmCode", { enumerable: true, get: function () { return device_code_1.DeviceAlarmCode; } });
Object.defineProperty(exports, "AlarmProcessStatus", { enumerable: true, get: function () { return device_code_1.AlarmProcessStatus; } });
Object.defineProperty(exports, "DeviceEventCode", { enumerable: true, get: function () { return device_code_1.DeviceEventCode; } });
Object.defineProperty(exports, "DeviceStatusCode", { enumerable: true, get: function () { return device_code_1.DeviceStatusCode; } });
Object.defineProperty(exports, "DeviceFaultCode", { enumerable: true, get: function () { return device_code_1.DeviceFaultCode; } });
Object.defineProperty(exports, "InterfaceCategory", { enumerable: true, get: function () { return device_code_1.InterfaceCategory; } });
Object.defineProperty(exports, "VideoEncode", { enumerable: true, get: function () { return device_code_1.VideoEncode; } });
var dimension_1 = require("./dimension");
Object.defineProperty(exports, "TwoDimension", { enumerable: true, get: function () { return dimension_1.TwoDimension; } });
Object.defineProperty(exports, "ThreeDimension", { enumerable: true, get: function () { return dimension_1.ThreeDimension; } });
var error_1 = require("./error");
Object.defineProperty(exports, "SpecError", { enumerable: true, get: function () { return error_1.SpecError; } });
var device_interface_1 = require("./device-interface");
Object.defineProperty(exports, "DeviceControlParam", { enumerable: true, get: function () { return device_interface_1.DeviceControlParam; } });
Object.defineProperty(exports, "InterfaceInitParam", { enumerable: true, get: function () { return device_interface_1.InterfaceInitParam; } });
Object.defineProperty(exports, "InterfaceDescripter", { enumerable: true, get: function () { return device_interface_1.InterfaceDescripter; } });
Object.defineProperty(exports, "DeviceControlCode", { enumerable: true, get: function () { return device_interface_1.DeviceControlCode; } });
Object.defineProperty(exports, "DeviceEventData", { enumerable: true, get: function () { return device_interface_1.DeviceEventData; } });
Object.defineProperty(exports, "DeviceEventType", { enumerable: true, get: function () { return device_interface_1.DeviceEventType; } });
var interface_value_1 = require("./interface-value");
Object.defineProperty(exports, "DoorValue", { enumerable: true, get: function () { return interface_value_1.DoorValue; } });
Object.defineProperty(exports, "EnvMonitorValue", { enumerable: true, get: function () { return interface_value_1.EnvMonitorValue; } });
Object.defineProperty(exports, "PowerGridValue", { enumerable: true, get: function () { return interface_value_1.PowerGridValue; } });
Object.defineProperty(exports, "RelayValue", { enumerable: true, get: function () { return interface_value_1.RelayValue; } });
Object.defineProperty(exports, "UPSValue", { enumerable: true, get: function () { return interface_value_1.UPSValue; } });
Object.defineProperty(exports, "RFIDTagValue", { enumerable: true, get: function () { return interface_value_1.RFIDTagValue; } });
Object.defineProperty(exports, "CallValue", { enumerable: true, get: function () { return interface_value_1.CallValue; } });
Object.defineProperty(exports, "VideoAnalyseValue", { enumerable: true, get: function () { return interface_value_1.VideoAnalyseValue; } });
Object.defineProperty(exports, "VideoAnalyseType", { enumerable: true, get: function () { return interface_value_1.VideoAnalyseType; } });
Object.defineProperty(exports, "Face", { enumerable: true, get: function () { return interface_value_1.Face; } });
Object.defineProperty(exports, "CarPlate", { enumerable: true, get: function () { return interface_value_1.CarPlate; } });
var message_1 = require("./message");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return message_1.Message; } });
Object.defineProperty(exports, "MessageType", { enumerable: true, get: function () { return message_1.MessageType; } });
Object.defineProperty(exports, "MessageTopic", { enumerable: true, get: function () { return message_1.MessageTopic; } });
var rest_1 = require("./rest");
Object.defineProperty(exports, "RestQuery", { enumerable: true, get: function () { return rest_1.RestQuery; } });
Object.defineProperty(exports, "RestResponse", { enumerable: true, get: function () { return rest_1.RestResponse; } });
var service_1 = require("./service");
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return service_1.Service; } });
Object.defineProperty(exports, "ServiceFinder", { enumerable: true, get: function () { return service_1.ServiceFinder; } });
Object.defineProperty(exports, "ServiceRegister", { enumerable: true, get: function () { return service_1.ServiceRegister; } });
Object.defineProperty(exports, "ServiceType", { enumerable: true, get: function () { return service_1.ServiceType; } });
