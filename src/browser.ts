import { CodeMap } from './code-map';
import { Config } from './config';
import { ResourceCode, DeviceAlarmCode, DeviceEventCode, DeviceStatusCode, DeviceFaultCode, InterfaceCategory } from './device-code';
import { TwoDimension, ThreeDimension } from './dimension';
import { SpecError } from './error';
import { DoorValue, EnvMonitorValue, PowerGridValue, UPSValue, RFIDTagValue, CallValue, VideoAnalyseValue, VideoAnalyseType, Face, CarPlate, DeviceControlParam, InterfaceInitParam, InterfaceDescripter, DeviceControlCode, DeviceEventData, DeviceEventType } from './device-interface';
import { Message, MessageType, MessageTopic } from './message';
import { RestQuery, RestResponse } from './rest';
import { Service, ServiceType } from './service-browser';
import { Option } from './option';

let InterfaceInitParamOption: Option.IInterfaceInitParamOption = {};
let RestQueryOption: Option.IRestQueryOption = { start: 0 };
let RestResponseOption: Option.IRestResponseOption = { result: true };

export default {
    CodeMap,
    SpecError,
    TwoDimension,
    ThreeDimension,
    Config,
    ResourceCode,
    InterfaceCategory,
    InterfaceInitParamOption,
    InterfaceInitParam,
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
    RestQuery,
    RestResponse,
    RestQueryOption,
    RestResponseOption,
    DeviceControlParam,
    InterfaceDescripter,
    DeviceEventType,
    DeviceEventData,
    Service,
    ServiceType
}
