import { CodeMap } from './code-map';

export enum MessageType {
    Unknown = -1,
    DeviceStatus = 0,
    DeviceEvent = 1,
    DeviceFault = 2,
    DeviceControl = 3,
    Custom = 99,
    Others = 100
}

let sysMessageTypeMap: Map<MessageType, string> = new Map([
    [MessageType.Unknown, '未知类型'],
    [MessageType.DeviceStatus, '设备状态'],
    [MessageType.DeviceEvent, '设备事件'],
    [MessageType.DeviceFault, '设备故障'],
    [MessageType.DeviceControl, '设备控制'],
    [MessageType.Custom, '自定义'],
    [MessageType.Others, '其他'],
]);

export function translateMessageType(type: MessageType) {
    return sysMessageTypeMap.get(type);
};

//for biz message exchange
export class Message {
    type: MessageType;
    content: string;
    sender: string;

    constructor(type: MessageType, content: string, sender?: string) {
        this.type = type;
        this.content = content;
        this.sender = sender;
    }
}

export const MessageTopics: Array<CodeMap> = [
    CodeMap.from('设备状态', 'saints-device-status'),
    CodeMap.from('设备事件', 'saints-device-event'),
    CodeMap.from('设备故障', 'saints-device-fault'),
    CodeMap.from('设备控制', 'saints-device-control'),
    CodeMap.from('自定义', 'saints-custom'),
    CodeMap.from('其他', 'others')
];