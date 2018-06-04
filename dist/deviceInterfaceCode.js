/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deviceInterfaceCode = {
    none: {
        name: '无',
        value: -1
    },
    hikvisionGeneralDevice: {
        name: '海康威视视频设备通用接口',
        value: 0
    },
    dahuaGeneralDevice: {
        name: '大华视频设备通用接口',
        value: 1
    },
    dahuaDSSVideoPlatform: {
        name: '大华DSS视频平台接口',
        value: 2
    },
    dahua7016VideoPlatform: {
        name: '大华7016视频平台接口',
        value: 3
    },
    netposaVideoPlatform: {
        name: '东方网力PVG接口',
        value: 4
    },
    univiewVideoPlatform: {
        name: '宇视视频设备和平台接口',
        value: 5
    },
    jinsanliVideoPlatform: {
        name: '金三立视频平台',
        value: 6
    },
    boshMTWAlarmSoftware: {
        name: '博世MTW软件报警接口',
        value: 7
    },
    boshIP7400AlarmHost: {
        name: '博世IP7400报警接口',
        value: 8
    },
    honeywellIP2000AlarmHost: {
        name: '霍尼韦尔IP2000报警接口',
        value: 9
    },
    honeywellIPMAlarmHost: {
        name: '霍尼韦尔IPM报警接口',
        value: 10
    },
    lonbonAnalogCallHost: {
        name: '莱邦模拟对讲接口',
        value: 11
    },
    lonbonDigitalCallHost: {
        name: '莱邦数字对讲接口',
        value: 12
    },
    jiaodajinggongDoorSoftware: {
        name: '交大精工门禁接口',
        value: 13
    },
    maiteanDoorSoftware: {
        name: '迈特安报警平台接口',
        value: 14
    },
    haoweiAlarmSoftware: {
        name: '浩维报警软件接口',
        value: 15
    },
    porisOPCServer: {
        name: 'PorisOPC服务器接口',
        value: 16
    },
    saibangteDigitalCallHost: {
        name: '赛邦特数字对讲接口',
        value: 17
    },
    haoweiDvrEncoderHost: {
        name: '浩维Dvr设备接口',
        value: 18
    },
    haoweiNvrEncoderHost: {
        name: '浩维Nvr设备接口',
        value: 19
    },
    keykingOPCSoftware: {
        name: '金凯门禁平台接口',
        value: 20
    },
    niubeierDoorSoftware: {
        name: '纽贝尔门禁软件接口',
        value: 21
    },
    pikeDoorController: {
        name: '匹克门禁控制器接口',
        value: 22
    },
    weigenDoorController: {
        name: '微根门禁控制器接口',
        value: 23
    },
    yitongDoorController: {
        name: '乙彤门禁软件接口',
        value: 24
    },
    yangbangLedController: {
        name: '仰邦电子屏控制器接口v4',
        value: 25
    },
    yikuoLedController: {
        name: '易阔电子屏控制器接口v2008',
        value: 26
    },
    linxinLedControllerV3: {
        name: '灵信电子屏控制器接口v3.3',
        value: 27
    },
    linxinLedControllerV5: {
        name: '灵信电子屏控制器接口v5.2013',
        value: 28
    },
    shizhanLedController: {
        name: '视展电子屏控制器接口',
        value: 29
    },
    xiangyunLedController: {
        name: '祥云电子屏控制器接口',
        value: 30
    },
    kuaiyuLedController: {
        name: '快鱼分贝报警主机接口v1',
        value: 31
    },
    bocomBVGController: {
        name: '博康BVG模拟矩阵接口',
        value: 32
    },
    hikvisionB20Platform: {
        name: '海康B20视频平台接口',
        value: 33
    },
    haoweiDecoderHost: {
        name: '浩维解码器接口',
        value: 34
    },
    infinovaMatrixController: {
        name: '英飞拓模拟矩阵接口',
        value: 35
    },
    intlMatrixController: {
        name: 'INTL模拟矩阵接口',
        value: 36
    },
    jinsanliMtrixSoftware: {
        name: '金三立模拟矩阵接口',
        value: 37
    },
    putaikeAlarmHost: {
        name: '普泰克报警主机接口',
        value: 38
    },
    dahuaTvwallController: {
        name: '大华大屏控制器接口',
        value: 39
    },
    skyworthTvwallController: {
        name: '创维大屏控制器接口',
        value: 40
    },
    tclTvwallController: {
        name: 'TCL电视墙控制器网络接口',
        value: 41
    },
    huiguUpsHost: {
        name: '慧谷不间断电源主机报警接口',
        value: 42
    },
    shanteC6UpsHost: {
        name: '山特C6不间断电源主机接口',
        value: 43
    },
    shante3C3EXUpsHost: {
        name: '山特3C3EX不间断电源主机接口',
        value: 44
    },
    yishiteUpsHost: {
        name: '易事特不间断电源串行接口',
        value: 45
    },
    hongshiVideoAnalysePlatform: {
        name: '弘视视频分析平台接口',
        value: 46
    },
    hongshenVideoAnalyseDevice: {
        name: '宏申视频分析设备接口',
        value: 47
    },
    lingxinLedControllerV5_2014: {
        name: '灵信电子屏控制器接口v5.2014',
        value: 48
    },
    hikvision7200Platform: {
        name: '海康7200视频平台接口',
        value: 49
    },
    hikvision8300Platform: {
        name: '海康8300视频平台接口',
        value: 50
    },
    hikvision8700Platform: {
        name: '海康8700视频平台接口',
        value: 51
    },
    kedaPlatform: {
        name: '科达视频平台接口',
        value: 52
    },
    guangtuoDevice: {
        name: '广拓视频设备接口',
        value: 53
    },
    meizanmeiDevice: {
        name: '美赞美视频设备接口',
        value: 54
    },
    yingfeituoDevice: {
        name: '英飞拓视频设备接口',
        value: 55
    },
    zhongxinliweiDevice: {
        name: '中兴力维视频设备接口',
        value: 56
    },
    yushiNvrEncoderHost: {
        name: '宇视Nvr设备接口',
        value: 57
    },
    networkCheck: {
        name: '网络监测接口',
        value: 58
    },
    kuaiyuSoundv2SERIAL: {
        name: '快鱼分贝报警主机接口v2',
        value: 59
    },
    tclTvWallSERIAL: {
        name: 'TCL电视墙控制器串行接口',
        value: 60
    },
    huiguUpsStatusUDP: {
        name: '慧谷不间断电源主机状态接口',
        value: 61
    },
    yishiteUpsModebusSERIAL: {
        name: '易事特不间断电源主机Modbus接口',
        value: 62
    },
    kuaiyuDigitalCallSDK: {
        name: '快鱼数字对讲接口',
        value: 63
    },
    aosongEnvMonitorTcpModbus: {
        name: '奥松温湿度监测接口',
        value: 64
    },
    miaoguanEnvMonitorTcpModbus: {
        name: '妙观温湿度监测接口',
        value: 65
    },
    hikvisionDecoderSDK: {
        name: '海康解码器接口',
        value: 66
    },
    dahuaDecoderSDK: {
        name: '大华解码器接口',
        value: 67
    },
    boshiAlarmSERIAL: {
        name: '博世报警主机接口',
        value: 68
    },
    yituFaceRecognitionMTXREST: {
        name: '依图人脸识别接口MTX版',
        value: 69
    },
    xilingVideoAnalyseREST: {
        name: '熙凌行为分析接口',
        value: 70
    },
    sihuaRFIDWEBSOCKET: {
        name: '思华人员定位报警接口',
        value: 71
    },
    unicomIOTREST: {
        name: '联通物联网接口',
        value: 72
    },
    dahuaVideoAnalyseSDK: {
        name: '大华视频分析设备接口',
        value: 73
    },
    sihuaRFIDLocatingREST: {
        name: '思华人员定位接口',
        value: 74
    },
    juyingRelayTCP: {
        name: '聚英继电器接口',
        value: 75
    },
    wanguDoorUDP: {
        name: '万谷门禁状态监测接口',
        value: 76
    },
    shengkeAlarmPlatform: {
        name: '盛科报警平台接口',
        value: 77
    },
    lingxinLedControllerV6: {
        name: '灵信电子屏控制器接口v6',
        value: 78
    },
    yituFaceRecognitionV18REST: {
        name: '依图人脸识别接口1.8版',
        value: 79
    },

    //saints define
    shengxiDoorUDP: {
        name: '圣熙门禁接口',
        value: 10001
    }
};

Object.freeze(deviceInterfaceCode);
exports.default = deviceInterfaceCode;