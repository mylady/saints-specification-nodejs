'use strict';

let deviceAlarmCode = {
    unknown: {
        name: '未知类型',
        value: -1
    },
    areaAlarm: {
        name: '防区报警',
        value: 0
    },
    motionDetec: {
        name: '移动侦测',
        value: 1
    },
    videoLost: {
        name: '视频丢失',
        value: 2
    },
    videoShelter: {
        name: '视频遮挡',
        value: 3
    },
    soundCheck: {
        name: '声音检测',
        value: 4
    },
    diskFull: {
        name: '硬盘满',
        value: 5
    },
    diskFault: {
        name: '硬盘故障',
        value: 6
    },
    soundLost: {
        name: '声音丢失',
        value: 7
    },
    deviceAbnormal: {
        name: '设备异常',
        value: 8
    },
    areaIntrusion: {
        name: '区域入侵',
        value: 9
    },
    limitHeight: {
        name: '限高',
        value: 10
    },
    wander: {
        name: '徘徊',
        value: 11
    },
    raiseup: {
        name: '起身',
        value: 12
    },
    targetLost: {
        name: '目标丢失',
        value: 13
    },
    abnormalBehavior: {
        name: '异常行为',
        value: 14
    },
    objectLeft: {
        name: '物品遗留',
        value: 15
    },
    stay: {
        name: '停留',
        value: 16
    },
    timeout: {
        name: '超时',
        value: 17
    },
    invalidOperation: {
        name: '非法操作',
        value: 18
    },
    threatOperation: {
        name: '胁迫操作',
        value: 19
    },
    remove: {
        name: '移除',
        value: 20
    },
    offline: {
        name: '离线',
        value: 21
    },
    powerUnstable: {
        name: '电源不稳定',
        value: 22
    },
    disturb: {
        name: '干扰',
        value: 23
    },
    deviceLost: {
        name: '丢失',
        value: 24
    },
    bypass: {
        name: '旁路',
        value: 25
    },
    inactive: {
        name: '失效',
        value: 26
    },
    recordStop: {
        name: '停止录制',
        value: 27
    },
    powerAbnormal: {
        name: '电源异常',
        value: 28
    },
    videoQuality: {
        name: '视质检测',
        value: 29
    },
    dutyCheck: {
        name: '值岗检测',
        value: 30
    },
    fierceMotion: {
        name: '剧烈运动',
        value: 31
    },
    deviceFault: {
        name: '设备故障',
        value: 32
    },
    audioLost: {
        name: '音频丢失',
        value: 33
    },
    fanFault: {
        name: '风扇故障',
        value: 34
    },
    temperatureAlarm: {
        name: '温度报警',
        value: 35
    },
    humidityAlarm: {
        name: '湿度报警',
        value: 36
    },
    doorPointAlarm: {
        name: '门磁报警',
        value: 37
    },
    forceOperation: {
        name: '强行闯入',
        value: 38
    },
    decibelAlarm: {
        name: '分贝报警',
        value: 39
    },
    lowPower: {
        name: '电量低',
        value: 40
    },
    videoAnalyseAlarm: {
        name: '视频分析报警',
        value: 41
    },
    faceDefenceAlarm: {
        name: '人脸布防报警',
        value: 42
    },
    rfidBrokenAlarm: {
        name: '腕带断开报警',
        value: 43
    },
    heartRateAlarm: {
        name: '心率异常报警',
        value: 44
    },
    rfidButtonAlarm: {
        name: '标签按钮报警',
        value: 45
    },
    smokeAlarm: {
        name: '烟雾报警',
        value: 46
    },
    fireAlarm: {
        name: '火警',
        value: 47
    },
    gathering:{
        name:'人员聚集报警',
        value:48
    }
};

Object.freeze(deviceAlarmCode);
export default deviceAlarmCode;