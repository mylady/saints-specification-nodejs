"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTopic = exports.Message = exports.MessageType = void 0;
const code_map_1 = require("./code-map");
exports.MessageType = {
    unknown: code_map_1.CodeMap.from('未知服务', -1),
    deviceEvent: code_map_1.CodeMap.from('身份认证服务', 0),
    deviceStatus: code_map_1.CodeMap.from('文件管理服务', 1),
    deviceFault: code_map_1.CodeMap.from('设备信息服务', 2),
    deviceControl: code_map_1.CodeMap.from('云代理服务', 3),
    monitorService: code_map_1.CodeMap.from('实时监控服务', 4),
    messageHub: code_map_1.CodeMap.from('消息服务', 5),
    eventService: code_map_1.CodeMap.from('事件服务', 6),
    logService: code_map_1.CodeMap.from('日志服务', 7),
    timeSerialService: code_map_1.CodeMap.from('时间流服务', 8)
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
