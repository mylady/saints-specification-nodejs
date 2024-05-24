import { CodeMap } from './code-map';

export const DeviceAlarmCode: Array<CodeMap> = [
    CodeMap.from('未知类型', -1),
    CodeMap.from('防区报警', 0),
    CodeMap.from('区域入侵报警', 1),
    CodeMap.from('限高报警', 2),
    CodeMap.from('徘徊报警', 3),
    CodeMap.from('起身报警', 4),
    CodeMap.from('目标丢失报警', 5),
    CodeMap.from('异常行为报警', 6),
    CodeMap.from('物品遗留报警', 7),
    CodeMap.from('停留报警', 8),
    CodeMap.from('超时报警', 9),
    CodeMap.from('非法操作报警', 10),
    CodeMap.from('胁迫操作报警', 11),
    CodeMap.from('移除报警', 12),
    CodeMap.from('脱岗报警', 13),
    CodeMap.from('剧烈运动报警', 14),
    CodeMap.from('温度报警', 15),
    CodeMap.from('湿度报警', 16),
    CodeMap.from('门磁报警', 17),
    CodeMap.from('强行闯入报警', 18),
    CodeMap.from('分贝报警', 19),
    CodeMap.from('人脸布防报警', 20),
    CodeMap.from('腕带断开报警', 21),
    CodeMap.from('心率异常报警', 22),
    CodeMap.from('标签按钮报警', 23),
    CodeMap.from('烟雾报警', 24),
    CodeMap.from('火警', 25),
    CodeMap.from('人员聚集报警', 26),
    CodeMap.from('值班睡觉报警', 27),
    CodeMap.from('打架报警', 28),
    CodeMap.from('高压断网报警', 29),
    CodeMap.from('高压触网报警', 30),
    CodeMap.from('高压短路报警', 31),
    CodeMap.from('视频分析报警', 32),
    CodeMap.from('疑似自缢', 33),
    CodeMap.from('蒙头睡觉', 34),
];


export const AlarmProcessStatus: Array<CodeMap> = [
    CodeMap.from('未知状态', -1),
    CodeMap.from('待确认', 0),
    CodeMap.from('确认误报', 1),
    CodeMap.from('确认报警', 2),
    CodeMap.from('已接收', 3),
    CodeMap.from('已处理', 4)
];


export const DeviceEventCode: Array<CodeMap> = [
    CodeMap.from('未知类型', -1),
    CodeMap.from('刷卡开门', 0),
    CodeMap.from('按钮开门', 1),
    CodeMap.from('对讲监听', 2),
    CodeMap.from('对讲呼叫', 3),
    CodeMap.from('人脸捕获', 4),
    CodeMap.from('车牌识别', 5),
    CodeMap.from('指纹开门', 6),
    CodeMap.from('人脸开门', 7)
];

export const DeviceStatusCode: Array<CodeMap> = [
    CodeMap.from('未知类型', -1),
    CodeMap.from('正常', 0),
    CodeMap.from('故障', 1),
    CodeMap.from('打开', 2),
    CodeMap.from('关闭', 3),
    CodeMap.from('常开', 4),
    CodeMap.from('常闭', 5),
    CodeMap.from('撤防', 6),
    CodeMap.from('布防', 7),
    CodeMap.from('报警', 8),
    CodeMap.from('旁路', 9),
    CodeMap.from('数据更新', 10),
];

export const DeviceFaultCode: Array<CodeMap> = [
    CodeMap.from('未知类型', -1),
    CodeMap.from('移动侦测', 0),
    CodeMap.from('视频丢失', 1),
    CodeMap.from('视频遮挡', 2),
    CodeMap.from('音频丢失', 3),
    CodeMap.from('硬盘满', 4),
    CodeMap.from('硬盘故障', 5),
    CodeMap.from('网络异常', 6),
    CodeMap.from('干扰', 7),
    CodeMap.from('电源异常', 8),
    CodeMap.from('视质异常', 9),
    CodeMap.from('离线', 10),
    CodeMap.from('亮度异常', 11),
    CodeMap.from('颜色异常', 12),
    CodeMap.from('对比度异常', 13),
    CodeMap.from('画面冻结', 14),
    CodeMap.from('图像模糊', 15),
    CodeMap.from('噪声干扰', 16),
    CodeMap.from('强横纹', 17),
    CodeMap.from('滚屏', 18),
    CodeMap.from('图像偏色', 19),
    CodeMap.from('云台异常', 20),
    CodeMap.from('黑白监测', 21),
    CodeMap.from('图像抖动', 22),
    CodeMap.from('图像剧变', 23),
    CodeMap.from('场景变换', 24),
    CodeMap.from('图像过暗', 25),
    CodeMap.from('信令延迟', 26),
    CodeMap.from('视频流延迟', 27),
    CodeMap.from('关键帧延迟', 28),
    CodeMap.from('图像过亮', 29),
    CodeMap.from('马赛克', 30),
    CodeMap.from('实时图像异常', 31),
    CodeMap.from('录像异常', 32)
];

export const ResourceCode: Array<CodeMap> = [
    CodeMap.from('未知类型', -1),
    CodeMap.from('摄像头', 0),
    CodeMap.from('门禁点', 1),
    CodeMap.from('门禁', 2),
    CodeMap.from('报警器', 3),
    CodeMap.from('对讲分机', 4),
    CodeMap.from('对讲主机', 5),
    CodeMap.from('电网', 6),
    CodeMap.from('环境监测', 7),
    CodeMap.from('RFID标签', 8),
    CodeMap.from('继电器', 9),
    CodeMap.from('LED', 10),
    CodeMap.from('RFID定位器', 11),

    CodeMap.from('解码通道', 128),
    CodeMap.from('矩阵通道', 129),
    CodeMap.from('大屏输出通道', 130),
    CodeMap.from('视频分析通道', 131),

    CodeMap.from('编码器', 256),
    CodeMap.from('解码器', 257),
    CodeMap.from('矩阵控制器', 258),
    CodeMap.from('大屏控制器', 259),
    CodeMap.from('报警主机', 260),
    CodeMap.from('门禁控制器', 261),
    CodeMap.from('电网控制器', 262),
    CodeMap.from('环境监测主机', 263),
    CodeMap.from('不间断电源主机', 264),
    CodeMap.from('视频分析主机', 265),
    CodeMap.from('继电器控制器', 266),
    CodeMap.from('视频国标服务器', 267)
];


export const InterfaceCategory: Array<CodeMap> = [
    CodeMap.from('海康威视视频设备通用接口', 0),
    CodeMap.from('大华视频设备通用接口', 1),
    CodeMap.from('大华DSS视频平台接口', 2),
    CodeMap.from('大华7016视频平台接口', 3),
    CodeMap.from('东方网力PVG接口', 4),
    CodeMap.from('宇视视频设备和平台接口', 5),
    CodeMap.from('金三立视频平台', 6),
    CodeMap.from('博世MTW软件报警接口', 7),
    CodeMap.from('博世IP7400报警接口', 8),
    CodeMap.from('霍尼韦尔IP2000报警接口', 9),
    CodeMap.from('霍尼韦尔IPM报警接口', 10),
    CodeMap.from('莱邦模拟对讲接口', 11),
    CodeMap.from('莱邦数字对讲接口', 12),
    CodeMap.from('交大精工门禁接口', 13),
    CodeMap.from('迈特安报警平台接口', 14),
    CodeMap.from('浩维报警软件接口', 15),
    CodeMap.from('PorisOPC服务器接口', 16),
    CodeMap.from('赛邦特数字对讲接口', 17),
    CodeMap.from('浩维Dvr设备接口', 18),
    CodeMap.from('浩维Nvr设备接口', 19),
    CodeMap.from('金凯门禁平台接口', 20),
    CodeMap.from('纽贝尔门禁软件接口', 21),
    CodeMap.from('匹克门禁控制器接口', 22),
    CodeMap.from('微根门禁控制器接口', 23),
    CodeMap.from('乙彤门禁软件接口', 24),
    CodeMap.from('仰邦电子屏控制器接口v4', 25),
    CodeMap.from('易阔电子屏控制器接口v2008', 26),
    CodeMap.from('灵信电子屏控制器接口v3.3', 27),
    CodeMap.from('灵信电子屏控制器接口v5.2013', 28),
    CodeMap.from('视展电子屏控制器接口', 29),
    CodeMap.from('祥云电子屏控制器接口', 30),
    CodeMap.from('快鱼分贝报警主机接口v1', 31),
    CodeMap.from('博康BVG模拟矩阵接口', 32),
    CodeMap.from('海康B20视频平台接口', 33),
    CodeMap.from('浩维解码器接口', 34),
    CodeMap.from('英飞拓模拟矩阵接口', 35),
    CodeMap.from('INTL模拟矩阵接口', 36),
    CodeMap.from('金三立模拟矩阵接口', 37),
    CodeMap.from('普泰克报警主机接口', 38),
    CodeMap.from('大华大屏控制器接口', 39),
    CodeMap.from('创维大屏控制器接口', 40),
    CodeMap.from('TCL电视墙控制器网络接口', 41),
    CodeMap.from('慧谷不间断电源主机报警接口', 42),
    CodeMap.from('山特C6不间断电源主机接口', 43),
    CodeMap.from('山特3C3EX不间断电源主机接口', 44),
    CodeMap.from('易事特不间断电源串行接口', 45),
    CodeMap.from('宏申视频分析平台接口', 46),
    CodeMap.from('宏申视频分析设备接口', 47),
    CodeMap.from('灵信电子屏控制器接口v5.2014', 48),
    CodeMap.from('海康7200视频平台接口', 49),
    CodeMap.from('海康8300视频平台接口', 50),
    CodeMap.from('海康8700视频平台接口', 51),
    CodeMap.from('科达视频平台接口', 52),
    CodeMap.from('广拓视频设备接口', 53),
    CodeMap.from('美赞美视频设备接口', 54),
    CodeMap.from('英飞拓视频设备接口', 55),
    CodeMap.from('中兴力维视频设备接口', 56),
    CodeMap.from('宇视Nvr设备接口', 57),
    CodeMap.from('网络监测接口', 58),
    CodeMap.from('快鱼分贝报警主机接口v2', 59),
    CodeMap.from('TCL电视墙控制器串行接口', 60),
    CodeMap.from('慧谷不间断电源主机状态接口', 61),
    CodeMap.from('易事特不间断电源主机Modbus接口', 62),
    CodeMap.from('快鱼数字对讲接口', 63),
    CodeMap.from('奥松温湿度监测接口', 64),
    CodeMap.from('妙观温湿度监测接口', 65),
    CodeMap.from('海康解码器接口', 66),
    CodeMap.from('大华解码器接口', 67),
    CodeMap.from('博世报警主机接口', 68),
    CodeMap.from('依图人脸识别接口MTX版', 69),
    CodeMap.from('熙凌行为分析接口', 70),
    CodeMap.from('思华人员定位报警接口', 71),
    CodeMap.from('联通物联网接口', 72),
    CodeMap.from('大华视频分析设备接口', 73),
    CodeMap.from('思华人员定位接口', 74),
    CodeMap.from('聚英继电器接口', 75),
    CodeMap.from('万谷门禁状态监测接口', 76),
    CodeMap.from('盛科报警平台接口', 77),
    CodeMap.from('灵信电子屏控制器接口v6', 78),
    CodeMap.from('依图人脸识别接口1.8版', 79),
    CodeMap.from('仁微人员定位接口', 80),
    CodeMap.from('宇视人脸识别接口', 81),
    CodeMap.from('金智视频平台接口', 82),
    CodeMap.from('妙观温湿度监测服务端接口', 83),
    CodeMap.from('美赞美温湿度接口', 84),
    CodeMap.from('仁硕温湿度接口', 85),
    CodeMap.from('中科云控温湿度接口', 86),
    CodeMap.from('中芯微人员定位接口', 87),
    CodeMap.from('旭飞高压电网接口', 88),
    CodeMap.from('旭飞红外幕帘接口', 89),
    CodeMap.from('界安震动光缆接口', 90),
    CodeMap.from('斯纽特温湿度接口', 91),
    CodeMap.from('科达视频分析接口', 92),
    CodeMap.from('科达视频诊断接口', 93),
    CodeMap.from('快鱼数字对讲接口v2', 94),
    CodeMap.from('快鱼数字对讲接口v3', 95),
    CodeMap.from('广拓电子围栏接口', 96),
    CodeMap.from('商汤人脸识别接口v3.2', 97),

    CodeMap.from('趋石行为分析接口', 98),
    CodeMap.from('趋石人脸识别接口', 99),
    CodeMap.from('海康ISC事件接口', 100),
    CodeMap.from('海康8200Artemis接口', 101),
    CodeMap.from('快鱼数字广播接口', 102),
    CodeMap.from('汉威空气质量接口', 103),
    CodeMap.from('君凌用电检测接口', 104),
    CodeMap.from('懋特人员定位接口', 105),
    CodeMap.from('美的空调串口控制接口', 106),
    CodeMap.from('美的空调网络控制接口V4', 107),
    CodeMap.from('永林继电器串口控制接口', 108),
    CodeMap.from('永林继电器网络控制接口', 109),
    CodeMap.from('比易特电窗串口控制接口', 110),
    CodeMap.from('比易特电窗网络控制接口', 111),
    CodeMap.from('飞繁消防报警主机接口', 112),
    CodeMap.from('依图视频分析接口', 113),
    CodeMap.from('汉威空气质量接口v2', 114),
    CodeMap.from('旭飞电动门接口', 115),
    CodeMap.from('汉威电动门接口', 116),
    CodeMap.from('四方博瑞用电平台接口', 117),
    CodeMap.from('美赞美人脸识别接口', 118),
    CodeMap.from('笃一人员定位接口', 119),
    CodeMap.from('禾视视频分析接口', 120),
    CodeMap.from('腾达环境监测接口', 121),
    CodeMap.from('腾达人员定位接口', 122),
    CodeMap.from('美的空调控制器接口V5', 123),

    CodeMap.from('圣熙门禁接口V1', 10001)
];

export const VideoEncode: Array<CodeMap> = [
    CodeMap.from('未知编码', -1),
    CodeMap.from('H264', 0),
    CodeMap.from('H265', 1),
];