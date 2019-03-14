'use strict';


import Config from './predefined/config';

import AlarmType from './predefined/alarmType';
import CameraType from './predefined/cameraType';
import DeviceCode from './predefined/deviceCode';
import InterfaceCategory from './predefined/interfaceCategory';
import ServiceType from './predefined/serviceType';

import EnvValue from './klass/envValue';
import PowerGridValue from './klass/powerGridValue';
import RFIDTagValue from './klass/rfidTagValue';
import UPSValue from './klass/upsValue';

import RestQuery from './klass/restQuery';
import RestResponse from './klass/restResponse';

import Service from './klass/service';
import ServiceRegister from './klass/serviceRegister';
import ServiceFinder from './klass/serviceFinder';

export default {
    Config:Config,

    AlarmType:AlarmType,
    CameraType:CameraType,
    DeviceCode:DeviceCode,
    InterfaceCategory:InterfaceCategory,
    ServiceType:ServiceType,
    
    EnvValue:EnvValue,
    PowerGridValue:PowerGridValue,
    RFIDTagValue:RFIDTagValue,
    UPSValue:UPSValue,

    RestQuery:RestQuery,
    RestResponse:RestResponse,

    Service:Service,
    ServiceRegister:ServiceRegister,
    ServiceFinder:ServiceFinder
}