"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTopic = exports.Message = exports.MessageType = void 0;
const code_map_1 = require("./code-map");
exports.MessageType = {
    unknown: code_map_1.CodeMap.from('未知类型', -1),
    deviceEvent: code_map_1.CodeMap.from('设备事件', 0),
    deviceStatus: code_map_1.CodeMap.from('设备状态', 1),
    deviceFault: code_map_1.CodeMap.from('设备故障', 2),
    deviceControl: code_map_1.CodeMap.from('设备控制', 3),
    custom: code_map_1.CodeMap.from('自定义', 99),
    others: code_map_1.CodeMap.from('其他', 100),
};
//for biz message exchange
class Message {
    constructor(type, content, sender) {
        this.type = type;
        this.content = content;
        this.sender = sender;
    }
}
exports.Message = Message;
exports.MessageTopic = {
    deviceEvent: code_map_1.CodeMap.from('设备事件', 'saints-device-event'),
    deviceStatus: code_map_1.CodeMap.from('设备状态', 'saints-device-status'),
    deviceFault: code_map_1.CodeMap.from('设备故障', 'saints-device-fault'),
    deviceControl: code_map_1.CodeMap.from('设备控制', 'saints-device-control'),
    custom: code_map_1.CodeMap.from('自定义', 'saints-custom'),
    others: code_map_1.CodeMap.from('其他', 'others')
};
