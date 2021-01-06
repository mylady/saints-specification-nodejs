"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceStatusCode = void 0;
const code_map_1 = require("./code-map");
exports.DeviceStatusCode = [
    code_map_1.CodeMap.from('-1', '未知类型'),
    code_map_1.CodeMap.from('0', '正常'),
    code_map_1.CodeMap.from('1', '故障'),
    code_map_1.CodeMap.from('2', '打开'),
    code_map_1.CodeMap.from('3', '关闭'),
    code_map_1.CodeMap.from('4', '常开'),
    code_map_1.CodeMap.from('5', '常闭'),
    code_map_1.CodeMap.from('6', '撤防'),
    code_map_1.CodeMap.from('7', '布防'),
    code_map_1.CodeMap.from('8', '报警'),
    code_map_1.CodeMap.from('9', '旁路')
];
