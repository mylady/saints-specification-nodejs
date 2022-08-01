
import { Config } from './config';
import { RestResponse } from './rest';
import { URLSearchParams } from 'url';
import got from 'got';
import { CodeMap } from './code-map';

const HubTemplateAddress = `http://ip:${Config.serviceHubPort}/rest`;
const ServiceRegisterInterval = 10;

export const ServiceType = {
    unknown: CodeMap.from('未知服务', -1),
    identityService: CodeMap.from('身份认证服务', 0),
    fileHub: CodeMap.from('文件管理服务', 1),
    deviceService: CodeMap.from('设备信息服务', 2),
    cloudProxyService: CodeMap.from('云代理服务', 3),
    monitorService: CodeMap.from('实时监控服务', 4),
    messageHub: CodeMap.from('消息服务', 5),
    eventService: CodeMap.from('事件服务', 6),
    logService: CodeMap.from('日志服务', 7),
    timeSerialService: CodeMap.from('时间流服务', 8)
};

export class Service {
    address: string;
    type: number;
    priority: number;

    constructor(address: string, type: number, priority: number) {
        this.address = address;
        this.type = type;
        this.priority = priority;
    }
}

export class ServiceFinder {
    hub: string;
    constructor(ip: string) {
        this.hub = HubTemplateAddress.replace('ip', ip);
    }

    async listService() {
        let v = await got.get(`${this.hub}/list`, {
            responseType: 'json'
        });
        return v.body;
    }

    async searchService(type: number) {
        let qs = new URLSearchParams([['service_type', type.toString()]]);
        let v = await got.get(`${this.hub}/search`, {
            searchParams: qs,
            responseType: 'json'
        });
        return v.body;
    }
}


export class ServiceRegister {
    private running: boolean;
    private timer?: NodeJS.Timeout;
    private hub: string;
    service: Service;

    constructor(ip: string, service: Service) {
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

const registerService = async (url: string, service: Service) => {
    try {
        let v = await got.post(url, {
            json: service,
            responseType: 'json'
        });

        let res = v.body as RestResponse;
        if (!res.result) {
            console.error('register service failed', res.err_msg);
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error('register service failed', err.message);
        } else {
            console.error('register service failed', err);
        }
    }
}