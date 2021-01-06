"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEventCode = void 0;
const code_map_1 = require("./code-map");
exports.DeviceEventCode = [
    code_map_1.CodeMap.from('-1', '未知类型'),
    code_map_1.CodeMap.from('0', '刷卡开门'),
    code_map_1.CodeMap.from('1', '按钮开门'),
    code_map_1.CodeMap.from('2', '对讲监听'),
    code_map_1.CodeMap.from('3', '对讲呼叫'),
    code_map_1.CodeMap.from('4', '人脸捕获'),
    code_map_1.CodeMap.from('5', '车牌识别'),
    code_map_1.CodeMap.from('6', '指纹开门'),
    code_map_1.CodeMap.from('7', '人脸开门')
];
