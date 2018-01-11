/**
 * Created by MyLady on 16/4/7.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var resourceCode = {
    none: {
        name: '未知类型',
        value: -1
    },
    encoderChannel: {
        name: '摄像头',
        value: 0
    },
    doorPoint: {
        name: '门禁点',
        value: 1
    },
    manuAlarm: {
        name: '手动报警器',
        value: 2
    },
    callTerminal: {
        name: '对讲终端',
        value: 3
    },
    soundAlarm: {
        name: '分贝报警器',
        value: 4
    },
    irAlarm: {
        name: '红外报警器',
        value: 5
    },
    powergrid: {
        name: '电网网段',
        value: 6
    },
    envMonitor: {
        name: '温湿度监测',
        value: 7
    },
    smokeMonitor: {
        name: '烟雾传感器',
        value: 8
    },
    airMonitor: {
        name: '空气质量监测',
        value: 9
    },
    rfidTag: {
        name: 'RFID标签',
        value: 10
    },

    decoderChannel: {
        name: '解码通道',
        value: 256
    },
    matrixChannel: {
        name: '矩阵通道',
        value: 257
    },
    screenOutput: {
        name: '显示屏输出',
        value: 258
    },
    videoAnalyseChannel: {
        name: '视频分析通道',
        value: 259
    },

    encoder: {
        name: '编码器主机',
        value: 512
    },
    decoder: {
        name: '解码器主机',
        value: 513
    },
    matrixController: {
        name: '矩阵控制器',
        value: 514
    },
    tvwallController: {
        name: '大屏控制器',
        value: 515
    },
    alarmHost: {
        name: '报警主机',
        value: 516
    },
    doorController: {
        name: '门禁控制器',
        value: 517
    },
    callhost: {
        name: '对讲主机',
        value: 518
    },
    listenerHost: {
        name: '监听主机',
        value: 519
    },
    powergridHost: {
        name: '电网主机',
        value: 520
    },
    ledController: {
        name: '电子屏控制器',
        value: 521
    },
    envMonitorHost: {
        name: '环境监测主机',
        value: 522
    },
    upsHost: {
        name: '不间断电源主机',
        value: 523
    },
    videoAnalyseHost: {
        name: '视频分析主机',
        value: 524
    },
    detector: {
        name: '探针',
        value: 525
    },
    pc: {
        name: '个人电脑',
        value: 1024
    },
    server: {
        name: '服务器',
        value: 1025
    },
    notebook: {
        name: '笔记本电脑',
        value: 1026
    },
    mobilephone: {
        name: '手机',
        value: 1027
    },
    pad: {
        name: '平板电脑',
        value: 1028
    },
    switch: {
        name: '交换机',
        value: 1029
    },
    router: {
        name: '路由器',
        value: 1030
    },
    hub: {
        name: '集线器',
        value: 1031
    },
    infopubTerminal: {
        name: '信息发布终端',
        value: 1032
    },
    iptvTerminal: {
        name: '数字电视终端',
        value: 1033
    },
    fireHydrant: {
        name: '消防栓',
        value: 1034
    },
    fireHydrantBox: {
        name: '消防栓箱',
        value: 1035
    },
    heater: {
        name: '热水器',
        value: 1036
    },
    acBox: {
        name: '空调外机',
        value: 1037
    },
    trashBin: {
        name: '垃圾桶',
        value: 1038
    },
    emergencyLight: {
        name: '紧急备用灯',
        value: 1039
    },
    jackBox: {
        name: '配电箱',
        value: 1040
    },
    centerAC: {
        name: '中央空调',
        value: 1041
    },
    lamp: {
        name: '路灯',
        value: 1042
    },
    ledLight: {
        name: 'led灯',
        value: 1043
    },
    roadSign: {
        name: '路标',
        value: 1044
    },
    cellOutTerminal: {
        name: '监外机',
        value: 1045
    },
    cellInTerminal: {
        name: '监内机',
        value: 1046
    },
    electricityCover: {
        name: '弱电井盖',
        value: 1047
    },
    wasteCover: {
        name: '污水井盖',
        value: 1048
    },
    rainCover: {
        name: '雨水井盖',
        vaue: 1049
    },

    realSource: {
        name: '直播源',
        value: 2048
    },
    videoFileSource: {
        name: '视频文件',
        value: 2049
    },
    audioFileSource: {
        name: '音频文件',
        value: 2050
    },
    webSource: {
        name: '网页',
        value: 2051
    },
    imageSource: {
        name: '图片文件',
        value: 2052
    }
};

Object.freeze(resourceCode);
exports.default = resourceCode;