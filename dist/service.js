"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRegister = exports.ServiceFinder = exports.Service = exports.translateServiceType = exports.ServiceType = void 0;
const config_1 = require("./config");
const url_1 = require("url");
const got_1 = require("got");
const HubTemplateAddress = `http://ip:${config_1.Config.serviceHubPort}/rest`;
const ServiceRegisterInterval = 10;
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["IdentityService"] = 0] = "IdentityService";
    ServiceType[ServiceType["FileHub"] = 1] = "FileHub";
    ServiceType[ServiceType["DeviceService"] = 2] = "DeviceService";
    ServiceType[ServiceType["CloudProxyService"] = 3] = "CloudProxyService";
    ServiceType[ServiceType["MonitorService"] = 4] = "MonitorService";
    ServiceType[ServiceType["MessageHub"] = 5] = "MessageHub";
    ServiceType[ServiceType["EventService"] = 6] = "EventService";
    ServiceType[ServiceType["LogService"] = 7] = "LogService";
    ServiceType[ServiceType["TimeSerialService"] = 8] = "TimeSerialService";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
;
let serviceTypeMap = new Map([
    [ServiceType.IdentityService, '身份认证服务'],
    [ServiceType.FileHub, '文件管理服务'],
    [ServiceType.DeviceService, '设备信息服务'],
    [ServiceType.CloudProxyService, '云代理服务'],
    [ServiceType.MonitorService, '实时监控服务'],
    [ServiceType.MessageHub, '消息服务'],
    [ServiceType.EventService, '事件服务'],
    [ServiceType.LogService, '日志服务'],
    [ServiceType.TimeSerialService, '时间流服务'],
]);
function translateServiceType(type) {
    return serviceTypeMap.get(type);
}
exports.translateServiceType = translateServiceType;
;
class Service {
    constructor(address, type, priority) {
        this.address = address;
        this.type = type;
        this.priority = priority;
    }
}
exports.Service = Service;
class ServiceFinder {
    constructor(ip) {
        this.hub = HubTemplateAddress.replace('ip', ip);
    }
    async listService() {
        let v = await got_1.default.get(`${this.hub}/list`, {
            responseType: 'json'
        });
        return v.body;
    }
    async searchService(type) {
        let qs = new url_1.URLSearchParams([['service_type', type.toString()]]);
        let v = await got_1.default.get(`${this.hub}/search`, {
            searchParams: qs,
            responseType: 'json'
        });
        return v.body;
    }
}
exports.ServiceFinder = ServiceFinder;
class ServiceRegister {
    constructor(ip, service) {
        this.timer = null;
        this.running = false;
        this.timer = null;
        this.service = service;
        this.hub = HubTemplateAddress.replace('ip', ip);
    }
    start() {
        if (this.running) {
            return;
        }
        this.running = true;
        this.timer = setInterval(() => {
            registerService(this.hub, this.service);
        }, ServiceRegisterInterval * 1000);
    }
    stop() {
        if (!this.running) {
            return;
        }
        if (this.timer) {
            this.running = false;
            clearInterval(this.timer);
        }
    }
}
exports.ServiceRegister = ServiceRegister;
const registerService = async (url, service) => {
    try {
        let v = await got_1.default.post(url, {
            json: service,
            responseType: 'json'
        });
        let res = v.body;
        if (!res.result) {
            console.error('register service failed', res.err_msg);
        }
    }
    catch (err) {
        console.error('register service failed', err.message);
    }
};
