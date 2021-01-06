import { CodeMap } from './code-map';

export const DeviceEventCode: Array<CodeMap> = [
    CodeMap.from('-1', '未知类型'),
    CodeMap.from('0', '刷卡开门'),
    CodeMap.from('1', '按钮开门'),
    CodeMap.from('2', '对讲监听'),
    CodeMap.from('3', '对讲呼叫'),
    CodeMap.from('4', '人脸捕获'),
    CodeMap.from('5', '车牌识别'),
    CodeMap.from('6', '指纹开门'),
    CodeMap.from('7', '人脸开门')
];