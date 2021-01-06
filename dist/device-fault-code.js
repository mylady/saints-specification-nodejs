"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFaultCode = void 0;
const code_map_1 = require("./code-map");
exports.DeviceFaultCode = [
    code_map_1.CodeMap.from('-1', '未知类型'),
    code_map_1.CodeMap.from('0', '防区报警'),
    code_map_1.CodeMap.from('1', '区域入侵'),
    code_map_1.CodeMap.from('2', '限高'),
    code_map_1.CodeMap.from('3', '徘徊'),
    code_map_1.CodeMap.from('4', '起身'),
    code_map_1.CodeMap.from('5', '目标丢失'),
    code_map_1.CodeMap.from('6', '异常行为'),
    code_map_1.CodeMap.from('7', '物品遗留'),
    code_map_1.CodeMap.from('8', '停留'),
    code_map_1.CodeMap.from('9', '非法操作'),
    code_map_1.CodeMap.from('10', '胁迫操作'),
    code_map_1.CodeMap.from('11', '脱岗'),
    code_map_1.CodeMap.from('12', '剧烈运动'),
    code_map_1.CodeMap.from('13', '温度报警'),
    code_map_1.CodeMap.from('14', '强行闯入'),
    code_map_1.CodeMap.from('15', '分贝报警'),
    code_map_1.CodeMap.from('16', '人脸布防报警'),
    code_map_1.CodeMap.from('17', '腕带断开报警'),
    code_map_1.CodeMap.from('18', '心率异常报警'),
    code_map_1.CodeMap.from('19', '标签按钮报警'),
    code_map_1.CodeMap.from('20', '烟雾报警'),
    code_map_1.CodeMap.from('21', '火警'),
    code_map_1.CodeMap.from('22', '人员聚集报警'),
    code_map_1.CodeMap.from('23', '值班睡觉'),
    code_map_1.CodeMap.from('24', '打架'),
    code_map_1.CodeMap.from('25', '无人值守'),
    code_map_1.CodeMap.from('26', '高压断网报警'),
    code_map_1.CodeMap.from('27', '高压触网报警'),
    code_map_1.CodeMap.from('28', '高压短路报警')
];
