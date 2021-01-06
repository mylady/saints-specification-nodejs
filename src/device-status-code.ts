import { CodeMap } from './code-map';

export const DeviceStatusCode: Array<CodeMap> = [
    CodeMap.from('-1', '未知类型'),
    CodeMap.from('0', '正常'),
    CodeMap.from('1', '故障'),
    CodeMap.from('2', '打开'),
    CodeMap.from('3', '关闭'),
    CodeMap.from('4', '常开'),
    CodeMap.from('5', '常闭'),
    CodeMap.from('6', '撤防'),
    CodeMap.from('7', '布防'),
    CodeMap.from('8', '报警'),
    CodeMap.from('9', '旁路')
];