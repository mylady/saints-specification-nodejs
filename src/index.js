'use strict';

import Config from './code/config';
import KafkaIO from './code/kafka-io';

import AuthError from './types/auth-error';

import AlarmType from './code/alarm-type';
import CameraType from './code/camera-type';
import DeviceCode from './code/device-code';
import InterfaceCategory from './code/interface-category';
import ServiceType from './code/service-type';

import EnvValue from './types/env-value';
import PowerGridValue from './types/power-grid-value';
import RFIDTagValue from './types/rfidtag-value';
import UPSValue from './types/ups-value';
import TwoDimension from './types/2d';
import ThreeDimension from './types/3d';

import RestQuery from './types/rest-query';
import RestResponse from './types/rest-response';

import Service from './types/service';
import ServiceRegister from './types/service-register';
import ServiceFinder from './types/service-finder';

import InternalMessage from './types/internal-message';
import TransmitMessage from './types/transmit-message';
import InternalMessageType from './code/internal-message-type';
import TransmitMessageType from './code/tranmit-message-type';

import DeviceAlarmCode from './code/device-alarm-code';
import DeviceRealCode from './code/device-real-code';
import DeviceStatusCode from './code/device-status-code';

export default {
    Config: Config,
    KafkaIO: KafkaIO,

    AuthError: AuthError,

    AlarmType: AlarmType,
    CameraType: CameraType,
    DeviceCode: DeviceCode,
    InterfaceCategory: InterfaceCategory,
    ServiceType: ServiceType,

    EnvValue: EnvValue,
    PowerGridValue: PowerGridValue,
    RFIDTagValue: RFIDTagValue,
    UPSValue: UPSValue,
    TwoDimension: TwoDimension,
    ThreeDimension: ThreeDimension,

    RestQuery: RestQuery,
    RestResponse: RestResponse,

    Service: Service,
    ServiceRegister: ServiceRegister,
    ServiceFinder: ServiceFinder,

    InternalMessage: InternalMessage,
    InternalMessageType: InternalMessageType,
    TransmitMessage: TransmitMessage,
    TransmitMessageType: TransmitMessageType,

    DeviceAlarmCode: DeviceAlarmCode,
    DeviceRealCode: DeviceRealCode,
    DeviceStatusCode: DeviceStatusCode
}