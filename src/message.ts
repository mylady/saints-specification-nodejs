import { CodeMap } from './code-map';

export const MessageType = {
    unknown: CodeMap.from('未知类型', -1),
    deviceEvent: CodeMap.from('设备事件', 0),
    deviceStatus: CodeMap.from('设备状态', 1),
    deviceFault: CodeMap.from('设备故障', 2),
    deviceControl: CodeMap.from('设备控制', 3),
    custom: CodeMap.from('自定义', 99),
    others: CodeMap.from('其他', 100),
};

//for biz message exchange
export class Message {
    type: number;
    content: any;
    sender?: string;

    constructor(type: number, content: any, sender?: string) {
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
