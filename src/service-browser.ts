
import { CodeMap } from './code-map';

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
    timeSerialService: CodeMap.from('时间流服务', 8),
    videoRecordService: CodeMap.from('视频录制服务', 9)
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