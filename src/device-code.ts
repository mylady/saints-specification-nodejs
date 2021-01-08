import { CodeMap } from './code-map';

export const DeviceAlarmCode: Array<CodeMap> = [
    CodeMap.from('-1', '未知类型'),
    CodeMap.from('0', '防区报警'),
    CodeMap.from('1', '区域入侵报警'),
    CodeMap.from('2', '限高报警'),
    CodeMap.from('3', '徘徊报警'),
    CodeMap.from('4', '起身报警'),
    CodeMap.from('5', '目标丢失报警'),
    CodeMap.from('6', '异常行为报警'),
    CodeMap.from('7', '物品遗留报警'),
    CodeMap.from('8', '停留报警'),
    CodeMap.from('9', '超时报警'),
    CodeMap.from('10', '非法操作报警'),
    CodeMap.from('11', '胁迫操作报警'),
    CodeMap.from('12', '移除报警'),
    CodeMap.from('13', '脱岗报警'),
    CodeMap.from('14', '剧烈运动报警'),
    CodeMap.from('15', '温度报警'),
    CodeMap.from('16', '湿度报警'),
    CodeMap.from('17', '门磁报警'),
    CodeMap.from('18', '强行闯入报警'),
    CodeMap.from('19', '分贝报警'),
    CodeMap.from('20', '人脸布防报警'),
    CodeMap.from('21', '腕带断开报警'),
    CodeMap.from('22', '心率异常报警'),
    CodeMap.from('23', '标签按钮报警'),
    CodeMap.from('24', '烟雾报警'),
    CodeMap.from('25', '火警'),
    CodeMap.from('26', '人员聚集报警'),
    CodeMap.from('27', '值班睡觉报警'),
    CodeMap.from('28', '打架报警'),
    CodeMap.from('29', '高压断网报警'),
    CodeMap.from('30', '高压触网报警'),
    CodeMap.from('31', '高压短路报警'),
    CodeMap.from('32', '视频分析报警')
];

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

export const DeviceFaultCode: Array<CodeMap> = [
    CodeMap.from('-1', '未知类型'),
    CodeMap.from('0', '移动侦测'),
    CodeMap.from('1', '视频丢失'),
    CodeMap.from('2', '视频遮挡'),
    CodeMap.from('3', '音频丢失'),
    CodeMap.from('4', '硬盘满'),
    CodeMap.from('5', '硬盘故障'),
    CodeMap.from('6', '网络异常'),
    CodeMap.from('7', '干扰'),
    CodeMap.from('8', '电源异常'),
    CodeMap.from('9', '视质异常'),
    CodeMap.from('10', '离线'),
    CodeMap.from('11', '亮度异常'),
    CodeMap.from('12', '颜色异常'),
    CodeMap.from('13', '对比度异常'),
    CodeMap.from('14', '画面冻结'),
    CodeMap.from('15', '图像模糊'),
    CodeMap.from('16', '噪声干扰'),
    CodeMap.from('17', '强横纹'),
    CodeMap.from('18', '滚屏'),
    CodeMap.from('19', '图像偏色'),
    CodeMap.from('20', '云台异常'),
    CodeMap.from('21', '黑白监测'),
    CodeMap.from('22', '图像抖动'),
    CodeMap.from('23', '图像剧变'),
    CodeMap.from('24', '场景变换'),
    CodeMap.from('25', '图像过暗'),
    CodeMap.from('26', '信令延迟'),
    CodeMap.from('27', '视频流延迟'),
    CodeMap.from('28', '关键帧延迟'),
    CodeMap.from('29', '图像过亮'),
    CodeMap.from('30', '马赛克'),
    CodeMap.from('31', '实时图像异常'),
    CodeMap.from('32', '录像异常')
];

export const ResourceCode: Array<CodeMap> = [
    CodeMap.from('-1', '未知类型'),
    CodeMap.from('0', '摄像头'),
    CodeMap.from('1', '门禁点'),
    CodeMap.from('2', '门禁'),
    CodeMap.from('3', '报警器'),
    CodeMap.from('4', '对讲分机'),
    CodeMap.from('5', '对讲主机'),
    CodeMap.from('6', '电网'),
    CodeMap.from('7', '环境监测'),
    CodeMap.from('8', 'RFID标签'),
    CodeMap.from('9', '继电器'),
    CodeMap.from('10', 'LED'),

    CodeMap.from('128', '解码通道'),
    CodeMap.from('129', '矩阵通道'),
    CodeMap.from('130', '大屏输出通弄到'),
    CodeMap.from('131', '视频分析通道'),

    CodeMap.from('256', '编码器'),
    CodeMap.from('257', '解码器'),
    CodeMap.from('258', '矩阵控制器'),
    CodeMap.from('259', '大屏控制器'),
    CodeMap.from('260', '报警主机'),
    CodeMap.from('261', '门禁控制器'),
    CodeMap.from('262', '电网控制器'),
    CodeMap.from('263', '环境监测主机'),
    CodeMap.from('264', '不间断电源主机'),
    CodeMap.from('265', '视频分析主机'),
    CodeMap.from('266', '继电器控制器')
];


export const InterfaceCategory: Array<CodeMap> = [
    CodeMap.from('0', '海康威视视频设备通用接口'),
    CodeMap.from('1', '大华视频设备通用接口'),
    CodeMap.from('2', '大华DSS视频平台接口'),
    CodeMap.from('3', '大华7016视频平台接口'),
    CodeMap.from('4', '东方网力PVG接口'),
    CodeMap.from('5', '宇视视频设备和平台接口'),
    CodeMap.from('6', '金三立视频平台'),
    CodeMap.from('7', '博世MTW软件报警接口'),
    CodeMap.from('8', '博世IP7400报警接口'),
    CodeMap.from('9', '霍尼韦尔IP2000报警接口'),
    CodeMap.from('10', '霍尼韦尔IPM报警接口'),
    CodeMap.from('11', '莱邦模拟对讲接口'),
    CodeMap.from('12', '莱邦数字对讲接口'),
    CodeMap.from('13', '交大精工门禁接口'),
    CodeMap.from('14', '迈特安报警平台接口'),
    CodeMap.from('15', '浩维报警软件接口'),
    CodeMap.from('16', 'PorisOPC服务器接口'),
    CodeMap.from('17', '赛邦特数字对讲接口'),
    CodeMap.from('18', '浩维Dvr设备接口'),
    CodeMap.from('19', '浩维Nvr设备接口'),
    CodeMap.from('20', '金凯门禁平台接口'),
    CodeMap.from('21', '纽贝尔门禁软件接口'),
    CodeMap.from('22', '匹克门禁控制器接口'),
    CodeMap.from('23', '微根门禁控制器接口'),
    CodeMap.from('24', '乙彤门禁软件接口'),
    CodeMap.from('25', '仰邦电子屏控制器接口v4'),
    CodeMap.from('26', '易阔电子屏控制器接口v2008'),
    CodeMap.from('27', '灵信电子屏控制器接口v3.3'),
    CodeMap.from('28', '灵信电子屏控制器接口v5.2013'),
    CodeMap.from('29', '视展电子屏控制器接口'),
    CodeMap.from('30', '祥云电子屏控制器接口'),
    CodeMap.from('31', '快鱼分贝报警主机接口v1'),
    CodeMap.from('33', '海康B20视频平台接口'),
    CodeMap.from('35', '英飞拓模拟矩阵接口'),
    CodeMap.from('36', 'INTL模拟矩阵接口'),
    CodeMap.from('37', '金三立模拟矩阵接口'),
    CodeMap.from('38', '普泰克报警主机接口'),
    CodeMap.from('39', '大华大屏控制器接口'),
    CodeMap.from('40', '创维大屏控制器接口'),
    CodeMap.from('41', 'TCL电视墙控制器网络接口'),
    CodeMap.from('42', '慧谷不间断电源主机报警接口'),
    CodeMap.from('43', '山特C6不间断电源主机接口'),
    CodeMap.from('44', '山特3C3EX不间断电源主机接口'),
    CodeMap.from('45', '易事特不间断电源串行接口'),
    CodeMap.from('47', '宏申视频分析设备接口'),
    CodeMap.from('48', '灵信电子屏控制器接口v5.2014'),
    CodeMap.from('49', '海康7200视频平台接口'),
    CodeMap.from('50', '海康8300视频平台接口'),
    CodeMap.from('51', '海康8700视频平台接口'),
    CodeMap.from('52', '科达视频平台接口'),
    CodeMap.from('53', '广拓视频设备接口'),
    CodeMap.from('54', '美赞美视频设备接口'),
    CodeMap.from('55', '英飞拓视频设备接口'),
    CodeMap.from('56', '中兴力维视频设备接口'),
    CodeMap.from('57', '宇视Nvr设备接口'),
    CodeMap.from('58', '网络监测接口'),
    CodeMap.from('59', '快鱼分贝报警主机接口v2'),
    CodeMap.from('60', 'TCL电视墙控制器串行接口'),
    CodeMap.from('61', '慧谷不间断电源主机状态接口'),
    CodeMap.from('62', '易事特不间断电源主机Modbus接口'),
    CodeMap.from('63', '快鱼数字对讲接口'),
    CodeMap.from('64', '奥松温湿度监测接口'),
    CodeMap.from('65', '妙观温湿度监测接口'),
    CodeMap.from('66', '海康解码器接口'),
    CodeMap.from('67', '大华解码器接口'),
    CodeMap.from('68', '博世报警主机接口'),
    CodeMap.from('69', '依图人脸识别接口MTX版'),
    CodeMap.from('70', '熙凌行为分析接口'),
    CodeMap.from('71', '思华人员定位报警接口'),
    CodeMap.from('72', '联通物联网接口'),
    CodeMap.from('73', '大华视频分析设备接口'),
    CodeMap.from('74', '思华人员定位接口'),
    CodeMap.from('75', '聚英继电器接口'),
    CodeMap.from('76', '万谷门禁状态监测接口'),
    CodeMap.from('77', '盛科报警平台接口'),
    CodeMap.from('78', '灵信电子屏控制器接口v6'),
    CodeMap.from('79', '依图人脸识别接口1.8版'),
    CodeMap.from('80', '仁微人员定位接口'),
    CodeMap.from('81', '宇视人脸识别接口'),
    CodeMap.from('82', '金智视频平台接口'),
    CodeMap.from('83', '妙观温湿度监测服务端接口'),
    CodeMap.from('84', '美赞美温湿度接口'),
    CodeMap.from('85', '仁硕温湿度接口'),
    CodeMap.from('86', '中科云控温湿度接口'),
    CodeMap.from('87', '中芯微人员定位接口'),
    CodeMap.from('88', '旭飞高压电网接口'),
    CodeMap.from('89', '旭飞红外幕帘接口'),
    CodeMap.from('90', '界安震动光缆接口'),
    CodeMap.from('91', '斯纽特温湿度接口'),
    CodeMap.from('92', '科达视频分析接口'),
    CodeMap.from('93', '科达视频诊断接口'),
    CodeMap.from('94', '快鱼数字对讲接口v2'),
    CodeMap.from('95', '快鱼数字对讲接口v3'),
    CodeMap.from('96', '广拓电子围栏接口'),
    CodeMap.from('97', '商汤人脸识别接口v3.2'),

    CodeMap.from('98', '趋石行为分析接口'),
    CodeMap.from('99', '趋石人脸识别接口'),
    CodeMap.from('100', '海康ISC事件接口'),
    CodeMap.from('101', '海康8200Artemis接口'),
    CodeMap.from('102', '快鱼数字广播接口'),
    CodeMap.from('103', '汉威空气质量接口'),
    CodeMap.from('104', '君凌用电检测接口'),
    CodeMap.from('105', '懋特人员定位接口'),
    CodeMap.from('106', '美的空调串口控制接口'),
    CodeMap.from('107', '美的空调网络控制接口'),
    CodeMap.from('108', '永林继电器串口控制接口'),
    CodeMap.from('109', '永林继电器网络控制接口'),
    CodeMap.from('110', '比易特电窗串口控制接口'),
    CodeMap.from('111', '比易特电窗网络控制接口'),
    CodeMap.from('112', '飞繁消防报警主机接口'),
    CodeMap.from('113', '依图视频分析接口'),
    CodeMap.from('114', '汉威空气质量接口v2')
];