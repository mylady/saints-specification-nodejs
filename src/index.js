'use strict';

import Config from './predefined/config';

import AlarmType from './predefined/alarmType';
import CameraType from './predefined/cameraType';
import DeviceCode from './predefined/deviceCode';
import InterfaceCategory from './predefined/interfaceCategory';
import ServiceType from './predefined/serviceType';
import DeviceStatus from './predefined/deviceStatus';

import EnvValue from './klass/envValue';
import PowerGridValue from './klass/powerGridValue';
import RFIDTagValue from './klass/rfidTagValue';
import UPSValue from './klass/upsValue';
import TwoDimension  from './klass/2d';
import ThreeDimension from './klass/3d';

import RestQuery from './klass/restQuery';
import RestResponse from './klass/restResponse';

import Service from './klass/service';
import ServiceRegister from './klass/serviceRegister';
import ServiceFinder from './klass/serviceFinder';

import FileHubAPI from './api/fileHubApi';
import IdentityAPI from './api/identityApi';

export default {
    Config:Config,

    AlarmType:AlarmType,
    CameraType:CameraType,
    DeviceCode:DeviceCode,
    InterfaceCategory:InterfaceCategory,
    ServiceType:ServiceType,
    DeviceStatus:DeviceStatus,
    
    EnvValue:EnvValue,
    PowerGridValue:PowerGridValue,
    RFIDTagValue:RFIDTagValue,
    UPSValue:UPSValue,
    TwoDimension:TwoDimension,
    ThreeDimension:ThreeDimension,

    RestQuery:RestQuery,
    RestResponse:RestResponse,

    Service:Service,
    ServiceRegister:ServiceRegister,
    ServiceFinder:ServiceFinder,

    FileHubAPI:FileHubAPI,
    IdentityAPI:IdentityAPI
}