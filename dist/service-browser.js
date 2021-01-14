"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.ServiceType = void 0;
const code_map_1 = require("./code-map");
exports.ServiceType = {
    unknown: code_map_1.CodeMap.from('未知服务', -1),
    identityService: code_map_1.CodeMap.from('身份认证服务', 0),
    fileHub: code_map_1.CodeMap.from('文件管理服务', 1),
    deviceService: code_map_1.CodeMap.from('设备信息服务', 2),
    cloudProxyService: code_map_1.CodeMap.from('云代理服务', 3),
    monitorService: code_map_1.CodeMap.from('实时监控服务', 4),
    messageHub: code_map_1.CodeMap.from('消息服务', 5),
    eventService: code_map_1.CodeMap.from('事件服务', 6),
    logService: code_map_1.CodeMap.from('日志服务', 7),
    timeSerialService: code_map_1.CodeMap.from('时间流服务', 8)
};
class Service {
    constructor(address, type, priority) {
        this.address = address;
        this.type = type;
        this.priority = priority;
    }
}
exports.Service = Service;
