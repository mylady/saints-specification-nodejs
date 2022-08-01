import { CodeMap } from './code-map';
export declare const MessageType: {
    unknown: CodeMap;
    deviceEvent: CodeMap;
    deviceStatus: CodeMap;
    deviceFault: CodeMap;
    deviceControl: CodeMap;
    custom: CodeMap;
    others: CodeMap;
};
export declare class Message {
    type: number;
    content: any;
    sender?: string;
    constructor(type: number, content: any, sender?: string);
}
export declare const MessageTopic: {
    deviceEvent: CodeMap;
    deviceStatus: CodeMap;
    deviceFault: CodeMap;
    deviceControl: CodeMap;
    custom: CodeMap;
    others: CodeMap;
};
