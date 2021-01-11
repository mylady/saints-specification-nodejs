import { CodeMap } from './code-map';

export const MessageType = {
    unknown: CodeMap.from('未知服务', -1),
    deviceEvent: CodeMap.from('身份认证服务', 0),
    deviceStatus: CodeMap.from('文件管理服务', 1),
    deviceFault: CodeMap.from('设备信息服务', 2),
    deviceControl: CodeMap.from('云代理服务', 3),
    monitorService: CodeMap.from('实时监控服务', 4),
    messageHub: CodeMap.from('消息服务', 5),
    eventService: CodeMap.from('事件服务', 6),
    logService: CodeMap.from('日志服务', 7),
    timeSerialService: CodeMap.from('时间流服务', 8)
};

//for biz message exchange
export class Message {
    type: number;
    content: string;
    sender: string;

    constructor(type: number, content: string, sender?: string) {
        this.type = type;
        this.content = content;
        this.sender = sender;
    }
}

export const MessageTopic = {
    deviceEvent: CodeMap.from('设备事件', 'saints-device-event'),
    deviceStatus: CodeMap.from('设备状态', 'saints-device-status'),
    deviceFault: CodeMap.from('设备故障', 'saints-device-fault'),
    deviceControl: CodeMap.from('设备控制', 'saints-device-control'),
    custom: CodeMap.from('自定义', 'saints-custom'),
    others: CodeMap.from('其他', 'others')
};
