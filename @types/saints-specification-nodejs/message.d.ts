import { CodeMap } from './code-map';
export declare enum MessageType {
    Unknown = -1,
    DeviceStatus = 0,
    DeviceEvent = 1,
    DeviceFault = 2,
    DeviceControl = 3,
    Custom = 99,
    Others = 100
}
export declare function translateMessageType(type: MessageType): string;
export declare class Message {
    type: MessageType;
    content: string;
    sender: string;
    constructor(type: MessageType, content: string, sender?: string);
}
export declare const MessageTopics: Array<CodeMap>;
