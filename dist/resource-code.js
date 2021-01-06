"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCode = void 0;
const code_map_1 = require("./code-map");
exports.ResourceCode = [
    code_map_1.CodeMap.from('-1', '未知类型'),
    code_map_1.CodeMap.from('0', '摄像头'),
    code_map_1.CodeMap.from('1', '门禁点'),
    code_map_1.CodeMap.from('2', '门禁'),
    code_map_1.CodeMap.from('3', '报警器'),
    code_map_1.CodeMap.from('4', '对讲分机'),
    code_map_1.CodeMap.from('5', '对讲主机'),
    code_map_1.CodeMap.from('6', '电网'),
    code_map_1.CodeMap.from('7', '环境监测'),
    code_map_1.CodeMap.from('8', 'RFID标签'),
    code_map_1.CodeMap.from('9', '继电器'),
    code_map_1.CodeMap.from('10', 'LED'),
    code_map_1.CodeMap.from('128', '解码通道'),
    code_map_1.CodeMap.from('129', '矩阵通道'),
    code_map_1.CodeMap.from('130', '大屏输出通弄到'),
    code_map_1.CodeMap.from('131', '视频分析通道'),
    code_map_1.CodeMap.from('256', '编码器'),
    code_map_1.CodeMap.from('257', '解码器'),
    code_map_1.CodeMap.from('258', '矩阵控制器'),
    code_map_1.CodeMap.from('259', '大屏控制器'),
    code_map_1.CodeMap.from('260', '报警主机'),
    code_map_1.CodeMap.from('261', '门禁控制器'),
    code_map_1.CodeMap.from('262', '电网控制器'),
    code_map_1.CodeMap.from('263', '环境监测主机'),
    code_map_1.CodeMap.from('264', '不间断电源主机'),
    code_map_1.CodeMap.from('265', '视频分析主机'),
    code_map_1.CodeMap.from('266', '继电器控制器')
];
