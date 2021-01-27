import { CodeMap } from './code-map';
import { Config } from './config';
import { ResourceCode, DeviceAlarmCode, DeviceEventCode, DeviceStatusCode, DeviceFaultCode, InterfaceCategory } from './device-code';
import { TwoDimension, ThreeDimension } from './dimension';
import { SpecError } from './error';
import { DoorValue, EnvMonitorValue, PowerGridValue, UPSValue, RFIDTagValue, CallValue, VideoAnalyseValue, VideoAnalyseType, Face, CarPlate, DeviceControlParam, InterfaceInitParam, InterfaceInitParamOption, InterfaceDescripter, DeviceControlCode, DeviceEventData, DeviceEventType } from './device-interface';
import { Message, MessageType, MessageTopic } from './message';
import { RestQuery, RestQueryOption, RestResponse, RestResponseOption } from './rest';

const spec: any = {
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
    RestQuery,
    RestResponse,
    DeviceControlParam,
    InterfaceInitParam,
    InterfaceDescripter,
    DeviceEventType,
    DeviceEventData,
}

if (process["browser"]) {
    import('./service-browser').then(service => {
        spec.ServiceType = service.ServiceType
        spec.Service = service.Service
    });
} else {
    import('./service').then(service => {
        spec.ServiceType = service.ServiceType
        spec.Service = service.Service
        spec.ServiceRegister = service.ServiceRegister
        spec.ServiceFinder = service.ServiceFinder
    });
}

export default spec;

module.exports = spec;
module.exports.default = spec;