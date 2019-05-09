'use strict';

import Config from './predefined/config';

import AuthError from './klass/auth-error';

import AlarmType from './predefined/alarm-type';
import CameraType from './predefined/camera-type';
import DeviceCode from './predefined/device-code';
import InterfaceCategory from './predefined/interface-category';
import ServiceType from './predefined/service-type';
import DeviceStatus from './predefined/device-status';

import EnvValue from './klass/env-value';
import PowerGridValue from './klass/power-grid-value';
import RFIDTagValue from './klass/rfidtag-value';
import UPSValue from './klass/ups-value';
import TwoDimension  from './klass/2d';
import ThreeDimension from './klass/3d';

import RestQuery from './klass/rest-query';
import RestResponse from './klass/rest-response';

import Service from './klass/service';
import ServiceRegister from './klass/service-register';
import ServiceFinder from './klass/service-finder';

import FileHubAPI from './api/file-hub-api';
import IdentityAPI from './api/identity-api';

export default {
    Config:Config,

    AuthError:AuthError,

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