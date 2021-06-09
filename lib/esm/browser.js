import { CodeMap } from './code-map';
import { Config } from './config';
import { ResourceCode, DeviceAlarmCode, DeviceEventCode, DeviceStatusCode, DeviceFaultCode, InterfaceCategory } from './device-code';
import { TwoDimension, ThreeDimension } from './dimension';
import { SpecError } from './error';
import { DoorValue, EnvMonitorValue, PowerGridValue, UPSValue, RFIDTagValue, CallValue, VideoAnalyseValue, VideoAnalyseType, Face, CarPlate, DeviceControlParam, InterfaceInitParam, InterfaceDescripter, DeviceControlCode, DeviceEventData, DeviceEventType } from './device-interface';
import { Message, MessageType, MessageTopic } from './message';
import { Service, ServiceType } from './service-browser';
const spec = {
    CodeMap,
    SpecError,
    TwoDimension,
    ThreeDimension,
    Config,
    ResourceCode,
    InterfaceCategory,
    Message,
    MessageTopic,
    MessageType,
    DeviceAlarmCode,
    DeviceEventCode,
    DeviceStatusCode,
    DeviceFaultCode,
    DeviceControlCode,
    DoorValue,
    EnvMonitorValue,
    PowerGridValue,
    UPSValue,
    RFIDTagValue,
    CallValue,
    VideoAnalyseValue,
    VideoAnalyseType,
    Face,
    CarPlate,
    DeviceControlParam,
    InterfaceInitParam,
    InterfaceDescripter,
    DeviceEventType,
    DeviceEventData,
    Service,
    ServiceType
};
export default spec;
module.exports = spec;
module.exports.default = spec;
