"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoEncode = exports.InterfaceCategory = exports.ResourceCode = exports.DeviceFaultCode = exports.DeviceStatusCode = exports.DeviceEventCode = exports.AlarmProcessStatus = exports.DeviceAlarmCode = void 0;
const code_map_1 = require("./code-map");
exports.DeviceAlarmCode = [
    code_map_1.CodeMap.from('未知类型', -1),
    code_map_1.CodeMap.from('防区报警', 0),
    code_map_1.CodeMap.from('区域入侵报警', 1),
    code_map_1.CodeMap.from('限高报警', 2),
    code_map_1.CodeMap.from('徘徊报警', 3),
    code_map_1.CodeMap.from('起身报警', 4),
    code_map_1.CodeMap.from('目标丢失报警', 5),
    code_map_1.CodeMap.from('异常行为报警', 6),
    code_map_1.CodeMap.from('物品遗留报警', 7),
    code_map_1.CodeMap.from('停留报警', 8),
    code_map_1.CodeMap.from('超时报警', 9),
    code_map_1.CodeMap.from('非法操作报警', 10),
    code_map_1.CodeMap.from('胁迫操作报警', 11),
    code_map_1.CodeMap.from('移除报警', 12),
    code_map_1.CodeMap.from('脱岗报警', 13),
    code_map_1.CodeMap.from('剧烈运动报警', 14),
    code_map_1.CodeMap.from('温度报警', 15),
    code_map_1.CodeMap.from('湿度报警', 16),
    code_map_1.CodeMap.from('门磁报警', 17),
    code_map_1.CodeMap.from('强行闯入报警', 18),
    code_map_1.CodeMap.from('分贝报警', 19),
    code_map_1.CodeMap.from('人脸布防报警', 20),
    code_map_1.CodeMap.from('腕带断开报警', 21),
    code_map_1.CodeMap.from('心率异常报警', 22),
    code_map_1.CodeMap.from('标签按钮报警', 23),
    code_map_1.CodeMap.from('烟雾报警', 24),
    code_map_1.CodeMap.from('火警', 25),
    code_map_1.CodeMap.from('人员聚集报警', 26),
    code_map_1.CodeMap.from('值班睡觉报警', 27),
    code_map_1.CodeMap.from('打架报警', 28),
    code_map_1.CodeMap.from('高压断网报警', 29),
    code_map_1.CodeMap.from('高压触网报警', 30),
    code_map_1.CodeMap.from('高压短路报警', 31),
    code_map_1.CodeMap.from('视频分析报警', 32),
    code_map_1.CodeMap.from('疑似自缢', 33),
    code_map_1.CodeMap.from('蒙头睡觉', 34),
    code_map_1.CodeMap.from('撞墙', 35),
    code_map_1.CodeMap.from('非休息时间段躺平', 36),
    code_map_1.CodeMap.from('跪地/跪床', 37),
    code_map_1.CodeMap.from('大声说话', 38),
    code_map_1.CodeMap.from('语音关键字报警', 39),
    code_map_1.CodeMap.from('设备运行报警', 40),
];
exports.AlarmProcessStatus = [
    code_map_1.CodeMap.from('未知状态', -1),
    code_map_1.CodeMap.from('待确认', 0),
    code_map_1.CodeMap.from('确认误报', 1),
    code_map_1.CodeMap.from('确认报警', 2),
    code_map_1.CodeMap.from('已接收', 3),
    code_map_1.CodeMap.from('已处理', 4)
];
exports.DeviceEventCode = [
    code_map_1.CodeMap.from('未知类型', -1),
    code_map_1.CodeMap.from('刷卡开门', 0),
    code_map_1.CodeMap.from('按钮开门', 1),
    code_map_1.CodeMap.from('对讲监听', 2),
    code_map_1.CodeMap.from('对讲呼叫', 3),
    code_map_1.CodeMap.from('人脸捕获', 4),
    code_map_1.CodeMap.from('车牌识别', 5),
    code_map_1.CodeMap.from('指纹开门', 6),
    code_map_1.CodeMap.from('人脸开门', 7)
];
exports.DeviceStatusCode = [
    code_map_1.CodeMap.from('未知类型', -1),
    code_map_1.CodeMap.from('正常', 0),
    code_map_1.CodeMap.from('故障', 1),
    code_map_1.CodeMap.from('打开', 2),
    code_map_1.CodeMap.from('关闭', 3),
    code_map_1.CodeMap.from('常开', 4),
    code_map_1.CodeMap.from('常闭', 5),
    code_map_1.CodeMap.from('撤防', 6),
    code_map_1.CodeMap.from('布防', 7),
    code_map_1.CodeMap.from('报警', 8),
    code_map_1.CodeMap.from('旁路', 9),
    code_map_1.CodeMap.from('数据更新', 10),
];
exports.DeviceFaultCode = [
    code_map_1.CodeMap.from('未知类型', -1),
    code_map_1.CodeMap.from('移动侦测', 0),
    code_map_1.CodeMap.from('视频丢失', 1),
    code_map_1.CodeMap.from('视频遮挡', 2),
    code_map_1.CodeMap.from('音频丢失', 3),
    code_map_1.CodeMap.from('硬盘满', 4),
    code_map_1.CodeMap.from('硬盘故障', 5),
    code_map_1.CodeMap.from('网络异常', 6),
    code_map_1.CodeMap.from('干扰', 7),
    code_map_1.CodeMap.from('电源异常', 8),
    code_map_1.CodeMap.from('视质异常', 9),
    code_map_1.CodeMap.from('离线', 10),
    code_map_1.CodeMap.from('亮度异常', 11),
    code_map_1.CodeMap.from('颜色异常', 12),
    code_map_1.CodeMap.from('对比度异常', 13),
    code_map_1.CodeMap.from('画面冻结', 14),
    code_map_1.CodeMap.from('图像模糊', 15),
    code_map_1.CodeMap.from('噪声干扰', 16),
    code_map_1.CodeMap.from('强横纹', 17),
    code_map_1.CodeMap.from('滚屏', 18),
    code_map_1.CodeMap.from('图像偏色', 19),
    code_map_1.CodeMap.from('云台异常', 20),
    code_map_1.CodeMap.from('黑白监测', 21),
    code_map_1.CodeMap.from('图像抖动', 22),
    code_map_1.CodeMap.from('图像剧变', 23),
    code_map_1.CodeMap.from('场景变换', 24),
    code_map_1.CodeMap.from('图像过暗', 25),
    code_map_1.CodeMap.from('信令延迟', 26),
    code_map_1.CodeMap.from('视频流延迟', 27),
    code_map_1.CodeMap.from('关键帧延迟', 28),
    code_map_1.CodeMap.from('图像过亮', 29),
    code_map_1.CodeMap.from('马赛克', 30),
    code_map_1.CodeMap.from('实时图像异常', 31),
    code_map_1.CodeMap.from('录像异常', 32)
];
exports.ResourceCode = [
    code_map_1.CodeMap.from('未知类型', -1),
    code_map_1.CodeMap.from('摄像头', 0),
    code_map_1.CodeMap.from('门禁点', 1),
    code_map_1.CodeMap.from('门禁', 2),
    code_map_1.CodeMap.from('报警器', 3),
    code_map_1.CodeMap.from('对讲分机', 4),
    code_map_1.CodeMap.from('对讲主机', 5),
    code_map_1.CodeMap.from('电网', 6),
    code_map_1.CodeMap.from('环境监测', 7),
    code_map_1.CodeMap.from('RFID标签', 8),
    code_map_1.CodeMap.from('继电器', 9),
    code_map_1.CodeMap.from('LED', 10),
    code_map_1.CodeMap.from('RFID定位器', 11),
    code_map_1.CodeMap.from('空调', 12),
    code_map_1.CodeMap.from('解码通道', 128),
    code_map_1.CodeMap.from('矩阵通道', 129),
    code_map_1.CodeMap.from('大屏输出通道', 130),
    code_map_1.CodeMap.from('视频分析通道', 131),
    code_map_1.CodeMap.from('编码器', 256),
    code_map_1.CodeMap.from('解码器', 257),
    code_map_1.CodeMap.from('矩阵控制器', 258),
    code_map_1.CodeMap.from('大屏控制器', 259),
    code_map_1.CodeMap.from('报警主机', 260),
    code_map_1.CodeMap.from('门禁控制器', 261),
    code_map_1.CodeMap.from('电网控制器', 262),
    code_map_1.CodeMap.from('环境监测主机', 263),
    code_map_1.CodeMap.from('不间断电源主机', 264),
    code_map_1.CodeMap.from('视频分析主机', 265),
    code_map_1.CodeMap.from('继电器控制器', 266),
    code_map_1.CodeMap.from('视频国标服务器', 267),
    code_map_1.CodeMap.from('空调控制器', 268),
    code_map_1.CodeMap.from('服务器', 512),
];
exports.InterfaceCategory = [
    code_map_1.CodeMap.from('海康威视视频设备通用接口', 0),
    code_map_1.CodeMap.from('大华视频设备通用接口', 1),
    code_map_1.CodeMap.from('大华DSS视频平台接口', 2),
    code_map_1.CodeMap.from('大华7016视频平台接口', 3),
    code_map_1.CodeMap.from('东方网力PVG接口', 4),
    code_map_1.CodeMap.from('宇视视频设备和平台接口', 5),
    code_map_1.CodeMap.from('金三立视频平台', 6),
    code_map_1.CodeMap.from('博世MTW软件报警接口', 7),
    code_map_1.CodeMap.from('博世IP7400报警接口', 8),
    code_map_1.CodeMap.from('霍尼韦尔IP2000报警接口', 9),
    code_map_1.CodeMap.from('霍尼韦尔IPM报警接口', 10),
    code_map_1.CodeMap.from('莱邦模拟对讲接口', 11),
    code_map_1.CodeMap.from('莱邦数字对讲接口', 12),
    code_map_1.CodeMap.from('交大精工门禁接口', 13),
    code_map_1.CodeMap.from('迈特安报警平台接口', 14),
    code_map_1.CodeMap.from('浩维报警软件接口', 15),
    code_map_1.CodeMap.from('PorisOPC服务器接口', 16),
    code_map_1.CodeMap.from('赛邦特数字对讲接口', 17),
    code_map_1.CodeMap.from('浩维Dvr设备接口', 18),
    code_map_1.CodeMap.from('浩维Nvr设备接口', 19),
    code_map_1.CodeMap.from('金凯门禁平台接口', 20),
    code_map_1.CodeMap.from('纽贝尔门禁软件接口', 21),
    code_map_1.CodeMap.from('匹克门禁控制器接口', 22),
    code_map_1.CodeMap.from('微根门禁控制器接口', 23),
    code_map_1.CodeMap.from('乙彤门禁软件接口', 24),
    code_map_1.CodeMap.from('仰邦电子屏控制器接口v4', 25),
    code_map_1.CodeMap.from('易阔电子屏控制器接口v2008', 26),
    code_map_1.CodeMap.from('灵信电子屏控制器接口v3.3', 27),
    code_map_1.CodeMap.from('灵信电子屏控制器接口v5.2013', 28),
    code_map_1.CodeMap.from('视展电子屏控制器接口', 29),
    code_map_1.CodeMap.from('祥云电子屏控制器接口', 30),
    code_map_1.CodeMap.from('快鱼分贝报警主机接口v1', 31),
    code_map_1.CodeMap.from('博康BVG模拟矩阵接口', 32),
    code_map_1.CodeMap.from('海康B20视频平台接口', 33),
    code_map_1.CodeMap.from('浩维解码器接口', 34),
    code_map_1.CodeMap.from('英飞拓模拟矩阵接口', 35),
    code_map_1.CodeMap.from('INTL模拟矩阵接口', 36),
    code_map_1.CodeMap.from('金三立模拟矩阵接口', 37),
    code_map_1.CodeMap.from('普泰克报警主机接口', 38),
    code_map_1.CodeMap.from('大华大屏控制器接口', 39),
    code_map_1.CodeMap.from('创维大屏控制器接口', 40),
    code_map_1.CodeMap.from('TCL电视墙控制器网络接口', 41),
    code_map_1.CodeMap.from('慧谷不间断电源主机报警接口', 42),
    code_map_1.CodeMap.from('山特C6不间断电源主机接口', 43),
    code_map_1.CodeMap.from('山特3C3EX不间断电源主机接口', 44),
    code_map_1.CodeMap.from('易事特不间断电源串行接口', 45),
    code_map_1.CodeMap.from('宏申视频分析平台接口', 46),
    code_map_1.CodeMap.from('宏申视频分析设备接口', 47),
    code_map_1.CodeMap.from('灵信电子屏控制器接口v5.2014', 48),
    code_map_1.CodeMap.from('海康7200视频平台接口', 49),
    code_map_1.CodeMap.from('海康8300视频平台接口', 50),
    code_map_1.CodeMap.from('海康8700视频平台接口', 51),
    code_map_1.CodeMap.from('科达视频平台接口', 52),
    code_map_1.CodeMap.from('广拓视频设备接口', 53),
    code_map_1.CodeMap.from('美赞美视频设备接口', 54),
    code_map_1.CodeMap.from('英飞拓视频设备接口', 55),
    code_map_1.CodeMap.from('中兴力维视频设备接口', 56),
    code_map_1.CodeMap.from('宇视Nvr设备接口', 57),
    code_map_1.CodeMap.from('网络监测接口', 58),
    code_map_1.CodeMap.from('快鱼分贝报警主机接口v2', 59),
    code_map_1.CodeMap.from('TCL电视墙控制器串行接口', 60),
    code_map_1.CodeMap.from('慧谷不间断电源主机状态接口', 61),
    code_map_1.CodeMap.from('易事特不间断电源主机Modbus接口', 62),
    code_map_1.CodeMap.from('快鱼数字对讲接口', 63),
    code_map_1.CodeMap.from('奥松温湿度监测接口', 64),
    code_map_1.CodeMap.from('妙观温湿度监测接口', 65),
    code_map_1.CodeMap.from('海康解码器接口', 66),
    code_map_1.CodeMap.from('大华解码器接口', 67),
    code_map_1.CodeMap.from('博世报警主机接口', 68),
    code_map_1.CodeMap.from('依图人脸识别接口MTX版', 69),
    code_map_1.CodeMap.from('熙凌行为分析接口', 70),
    code_map_1.CodeMap.from('思华人员定位报警接口', 71),
    code_map_1.CodeMap.from('联通物联网接口', 72),
    code_map_1.CodeMap.from('大华视频分析设备接口', 73),
    code_map_1.CodeMap.from('思华人员定位接口', 74),
    code_map_1.CodeMap.from('聚英继电器接口', 75),
    code_map_1.CodeMap.from('万谷门禁状态监测接口', 76),
    code_map_1.CodeMap.from('盛科报警平台接口', 77),
    code_map_1.CodeMap.from('灵信电子屏控制器接口v6', 78),
    code_map_1.CodeMap.from('依图人脸识别接口1.8版', 79),
    code_map_1.CodeMap.from('仁微人员定位接口', 80),
    code_map_1.CodeMap.from('宇视人脸识别接口', 81),
    code_map_1.CodeMap.from('金智视频平台接口', 82),
    code_map_1.CodeMap.from('妙观温湿度监测服务端接口', 83),
    code_map_1.CodeMap.from('美赞美温湿度接口', 84),
    code_map_1.CodeMap.from('仁硕温湿度接口', 85),
    code_map_1.CodeMap.from('中科云控温湿度接口', 86),
    code_map_1.CodeMap.from('中芯微人员定位接口', 87),
    code_map_1.CodeMap.from('旭飞高压电网接口', 88),
    code_map_1.CodeMap.from('旭飞红外幕帘接口', 89),
    code_map_1.CodeMap.from('界安震动光缆接口', 90),
    code_map_1.CodeMap.from('斯纽特温湿度接口', 91),
    code_map_1.CodeMap.from('科达视频分析接口', 92),
    code_map_1.CodeMap.from('科达视频诊断接口', 93),
    code_map_1.CodeMap.from('快鱼数字对讲接口v2', 94),
    code_map_1.CodeMap.from('快鱼数字对讲接口v3', 95),
    code_map_1.CodeMap.from('广拓电子围栏接口', 96),
    code_map_1.CodeMap.from('商汤人脸识别接口v3.2', 97),
    code_map_1.CodeMap.from('趋石行为分析接口', 98),
    code_map_1.CodeMap.from('趋石人脸识别接口', 99),
    code_map_1.CodeMap.from('海康ISC事件接口', 100),
    code_map_1.CodeMap.from('海康8200Artemis接口', 101),
    code_map_1.CodeMap.from('快鱼数字广播接口', 102),
    code_map_1.CodeMap.from('汉威空气质量接口', 103),
    code_map_1.CodeMap.from('君凌用电检测接口', 104),
    code_map_1.CodeMap.from('懋特人员定位接口', 105),
    code_map_1.CodeMap.from('美的空调串口控制接口', 106),
    code_map_1.CodeMap.from('美的空调网络控制接口V4', 107),
    code_map_1.CodeMap.from('永林继电器串口控制接口', 108),
    code_map_1.CodeMap.from('永林继电器网络控制接口', 109),
    code_map_1.CodeMap.from('比易特电窗串口控制接口', 110),
    code_map_1.CodeMap.from('比易特电窗网络控制接口', 111),
    code_map_1.CodeMap.from('飞繁消防报警主机接口', 112),
    code_map_1.CodeMap.from('依图视频分析接口', 113),
    code_map_1.CodeMap.from('汉威空气质量接口v2', 114),
    code_map_1.CodeMap.from('旭飞电动门接口', 115),
    code_map_1.CodeMap.from('汉威电动门接口', 116),
    code_map_1.CodeMap.from('四方博瑞用电平台接口', 117),
    code_map_1.CodeMap.from('美赞美人脸识别接口', 118),
    code_map_1.CodeMap.from('笃一人员定位接口', 119),
    code_map_1.CodeMap.from('禾视视频分析接口', 120),
    code_map_1.CodeMap.from('腾达环境监测接口', 121),
    code_map_1.CodeMap.from('腾达人员定位接口', 122),
    code_map_1.CodeMap.from('美的空调控制器接口V5', 123),
    code_map_1.CodeMap.from('海康威视视频设备通用接口V2', 124),
    code_map_1.CodeMap.from('禾视视频分析接口V2', 125),
    code_map_1.CodeMap.from('交大精工门禁接口V2', 126),
    code_map_1.CodeMap.from('中国电子视频分析接口', 127),
    code_map_1.CodeMap.from('腾达电源接口', 128),
    code_map_1.CodeMap.from('腾达风扇接口', 129),
    code_map_1.CodeMap.from('快鱼语音分析接口', 130),
    code_map_1.CodeMap.from('旷视人脸识别盒子接口V3', 131),
    code_map_1.CodeMap.from('商汤人脸识别盒子接口V2.4', 132),
    code_map_1.CodeMap.from('汉威设备运行监测接口', 133),
    code_map_1.CodeMap.from('大华视频分析接口V2', 134),
    code_map_1.CodeMap.from('计通温湿度接口V7', 135),
    code_map_1.CodeMap.from('圣熙门禁接口V1', 10001)
];
exports.VideoEncode = [
    code_map_1.CodeMap.from('未知编码', -1),
    code_map_1.CodeMap.from('H264', 0),
    code_map_1.CodeMap.from('H265', 1),
];
