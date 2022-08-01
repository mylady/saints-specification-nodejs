"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRegister = exports.ServiceFinder = exports.Service = exports.ServiceType = void 0;
const config_1 = require("./config");
const url_1 = require("url");
const got_1 = __importDefault(require("got"));
const code_map_1 = require("./code-map");
const HubTemplateAddress = `http://ip:${config_1.Config.serviceHubPort}/rest`;
const ServiceRegisterInterval = 10;
exports.ServiceType = {
    unknown: code_map_1.CodeMap.from('未知服务', -1),
    identityService: code_map_1.CodeMap.from('身份认证服务', 0),
    fileHub: code_map_1.CodeMap.from('文件管理服务', 1),
    deviceService: code_map_1.CodeMap.from('设备信息服务', 2),
    cloudProxyService: code_map_1.CodeMap.from('云代理服务', 3),
    monitorService: code_map_1.CodeMap.from('实时监控服务', 4),
    messageHub: code_map_1.CodeMap.from('消息服务', 5),
    eventService: code_map_1.CodeMap.from('事件服务', 6),
    logService: code_map_1.CodeMap.from('日志服务', 7),
    timeSerialService: code_map_1.CodeMap.from('时间流服务', 8)
};
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
    listService() {
        return __awaiter(this, void 0, void 0, function* () {
            let v = yield got_1.default.get(`${this.hub}/list`, {
                responseType: 'json'
            });
            return v.body;
        });
    }
    searchService(type) {
        return __awaiter(this, void 0, void 0, function* () {
            let qs = new url_1.URLSearchParams([['service_type', type.toString()]]);
            let v = yield got_1.default.get(`${this.hub}/search`, {
                searchParams: qs,
                responseType: 'json'
            });
            return v.body;
        });
    }
}
exports.ServiceFinder = ServiceFinder;
class ServiceRegister {
    constructor(ip, service) {
        this.running = false;
        this.service = service;
        this.hub = HubTemplateAddress.replace('ip', ip);
    }
    start() {
        if (this.running) {
            return;
        }
        this.running = true;
        this.timer = setInterval(() => {
            registerService(`${this.hub}/register`, this.service);
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
const registerService = (url, service) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let v = yield got_1.default.post(url, {
            json: service,
            responseType: 'json'
        });
        let res = v.body;
        if (!res.result) {
            console.error('register service failed', res.err_msg);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('register service failed', err.message);
        }
        else {
            console.error('register service failed', err);
        }
    }
});
