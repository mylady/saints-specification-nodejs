"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTopics = exports.Message = exports.translateMessageType = exports.MessageType = void 0;
const code_map_1 = require("./code-map");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Unknown"] = -1] = "Unknown";
    MessageType[MessageType["DeviceStatus"] = 0] = "DeviceStatus";
    MessageType[MessageType["DeviceEvent"] = 1] = "DeviceEvent";
    MessageType[MessageType["DeviceFault"] = 2] = "DeviceFault";
    MessageType[MessageType["DeviceControl"] = 3] = "DeviceControl";
    MessageType[MessageType["Custom"] = 99] = "Custom";
    MessageType[MessageType["Others"] = 100] = "Others";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
let sysMessageTypeMap = new Map([
    [MessageType.Unknown, '未知类型'],
    [MessageType.DeviceStatus, '设备状态'],
    [MessageType.DeviceEvent, '设备事件'],
    [MessageType.DeviceFault, '设备故障'],
    [MessageType.DeviceControl, '设备控制'],
    [MessageType.Custom, '自定义'],
    [MessageType.Others, '其他'],
]);
function translateMessageType(type) {
    return sysMessageTypeMap.get(type);
}
exports.translateMessageType = translateMessageType;
;
//for biz message exchange
class Message {
    constructor(type, content, sender) {
        this.type = type;
        this.content = content;
        this.sender = sender;
    }
}
exports.Message = Message;
exports.MessageTopics = [
    code_map_1.CodeMap.from('设备状态', 'saints-device-status'),
    code_map_1.CodeMap.from('设备事件', 'saints-device-event'),
    code_map_1.CodeMap.from('设备故障', 'saints-device-fault'),
    code_map_1.CodeMap.from('设备控制', 'saints-device-control'),
    code_map_1.CodeMap.from('自定义', 'saints-custom'),
    code_map_1.CodeMap.from('其他', 'others')
];
