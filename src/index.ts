import { CodeMap } from './code-map';
import { Config } from './config';
import { ResourceCode, DeviceAlarmCode, DeviceEventCode, DeviceStatusCode, DeviceFaultCode, InterfaceCategory } from './device-code';
import { TwoDimension, ThreeDimension } from './dimension';
import { SpecError } from './error';
import { EnvMonitorValue, PowerGridValue, UPSValue, RFIDTagValue, CallValue, VideoAnalyseValue, VideoAnalyseType, Face, CarPlate, DeviceControlParam, InterfaceInitParam, InterfaceInitParamOption } from './device-interface';
import { Message, MessageType, MessageTopics } from './message';
import { RestQuery, RestQueryOption, RestResponse, RestResponseOption } from './rest';
import { Service, ServiceFinder, ServiceRegister, ServiceType } from './service';

const spec = {
    CodeMap,
    SpecError,
    TwoDimension,
    ThreeDimension,
    Config,
    ResourceCode,
    InterfaceCategory,
    Message,
    MessageTopics,
    MessageType,
    DeviceAlarmCode,
    DeviceEventCode,
    DeviceStatusCode,
    DeviceFaultCode,
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
    Service,
    ServiceFinder,
    ServiceRegister,
    ServiceType,
    DeviceControlParam,
    InterfaceInitParam
}

export default spec;

module.exports = spec;
module.exports.default = spec;