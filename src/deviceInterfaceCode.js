/**
 * Created by wulei on 17-5-5.
 */
'use strict';

let deviceInterfaceCode = {
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
        name: '仰邦电子屏控制器接口V4',
        value: 25
    },
    yikuoLedController: {
        name: '易阔电子屏控制器接口V2008',
        value: 26
    },
    linxinLedControllerV3: {
        name: '灵信电子屏控制器接口V3.3',
        value: 27
    },
    linxinLedControllerV5: {
        name: '灵信电子屏控制器接口V5.2013',
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
    kuaiyuSoundV1SERIAL: {
        name: '快鱼分贝报警主机接口V1',
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
    kuaiyuSoundV2SERIAL: {
        name: '快鱼分贝报警主机接口V2',
        value: 59
    },
    tclTvwallSERIAL: {
        name: 'TCL电视墙控制器串行接口',
        value: 60
    },
    huiguUpsStatusUDP: {
        name: '慧谷不间断电源主机状态接口',
        value: 61
    },
    yishiteUpsModbusSERIAL: {
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
    renweiRFIDUDP: {
        name: '仁微人员定位接口',
        value: 80
    },
    yushiFaceRecognitionREST: {
        name: '宇视人脸识别接口',
        value: 81
    },
    jinzhiVideoPlatformSDK: {
        name: '金智视频平台接口',
        value: 82
    },
    miaoguanEnvMonitorTCPServer: {
        name: '妙观温湿度监测服务端接口',
        value: 83
    },
    meizanmeiIPCEnvMonitorUDP: {
        name: '美赞美温湿度接口',
        value: 84
    },
    renshuoEnvMonitorSDK: {
        name: '仁硕温湿度接口',
        value: 85
    },
    zhongkeyunkongEnvMonitorREST: {
        name: '中科云控温湿度接口',
        value: 86
    },
    zhongxinweiRFIDSDK: {
        name: '中芯微人员定位接口',
        value: 87
    },
    xufeiPowerGridTCP: {
        name: '旭飞高压电网接口',
        value: 88
    },
    xufeiIrAlarmTCP: {
        name: '旭飞红外幕帘接口',
        value: 89
    },
    jieanPerimeterTCP: {
        name: '界安震动光缆接口',
        value: 90
    },
    siniuteEnvMonitorREST: {
        name: '斯纽特温湿度接口',
        value: 91
    },
    kedaVideoAnalyseWebService: {
        name: '科达视频分析接口',
        value: 92
    },
    kedaVideoDiagnosticREST: {
        name: '科达视频诊断接口',
        value: 93
    },
    kuaiyuDigitalCallSDKV2: {
        name: '快鱼数字对讲接口V2',
        value: 94
    },
    kuaiyuDigitalCallSDKV3: {
        name: '快鱼数字对讲接口V3',
        value: 95
    },
    guangtuoPerimeterSDK: {
        name: '广拓电子围栏接口',
        value: 96
    },
    shangtangFaceRecognitionV32REST: {
        name: '商汤人脸识别接口',
        value: 97
    },
    qushiVideoAnalyseSDK: {
        name: '趋石视频分析接口',
        value: 98
    },
    qushiFaceAnalyseTCPServer: {
        name: '趋石人脸识别接口',
        value: 99
    },
    haikangISCPassive: {
        name: '海康ISC平台消息推送接口',
        value: 100
    },
    haikang8200ArtemisPlatformSDK: {
        name: '海康8200Artemis平台',
        value: 101
    },
    kuaiyuDigitalBroadcastSDK: {
        name: '快鱼数字广播',
        value: 102
    },
    hanweiAirMonitorUDP: {
        name: '汉威空气质量监测',
        value: 103
    },
    junlingUPSHttpServer: {
        name: '君凌用电检测',
        value: 104
    },
    maoteRFIDREST: {
        name: '懋特人员定位',
        value: 105
    },

    meiDiAirConditionModbusSERIAL: {
        name: '美的空调控制接口',
        value: 106
    },
    meiDiAirConditionModbusTCP: {
        name: '美的空调控制接口',
        value: 107
    },
    yongLinRelaySERIAL: {
        name: '永林继电器串口控制器',
        value: 108
    },
    yongLinRelayTCP: {
        name: '永林继电器网络控制器',
        value: 109
    },
    biYiTeRelaySERIAL: {
        name: '比益特电窗串口控制器',
        value: 110
    },
    biYiTeRelayTCP: {
        name: '比益特电窗网络控制器',
        value: 111
    },
    feiFanAlarmHostSERIAL: {
        name: '飞繁消防报警主机',
        value: 112
    },
    yituVideoAnalyseHttpServer: {
        name: '依图视频分析接口',
        value: 113
    },
    hanweiAirMonitorUDPV2: {
        name: '汉威空气质量监测V2',
        value: 114
    },
    xuFeiElecDoorTCP: {
        name: '旭飞电动门接口',
        value: 115
    },
    hanweiElecDoorSDK: {
        name: '汉威电动门接口',
        value: 116
    },
    unknownSoundAlarmerModbusSERIAL: {
        name: '未知声光报警接口',
        value: 117
    },
    meizanmeiFaceAnalyseHTTP: {
        name: '美赞美人脸识别接口',
        value: 118
    },


    //saints define
    shengxiDoorUDP: {
        name: '圣熙门禁接口',
        value: 10001
    },
    shengxiEnvUPSHttpServer: {
        name: '圣熙动力环境接口',
        value: 10002
    }
};

Object.freeze(deviceInterfaceCode);
export default deviceInterfaceCode;