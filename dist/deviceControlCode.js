/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deviceControlCode = {
    outarm: {
        name: '外出布防',
        value: 0
    },
    stayarm: {
        name: '留守布防',
        value: 1
    },
    disarm: {
        name: '解除布防',
        value: 2
    },
    connectRelay: {
        name: '接通继电器',
        value: 3
    },
    disconnectRelay: {
        name: '断开继电器',
        value: 4
    },
    bypass: {
        name: '旁路',
        value: 5
    },
    cancelBypass: {
        name: '取消旁路',
        value: 6
    },
    queryArm: {
        name: '查询防区状态',
        value: 7
    },
    callSlave: {
        name: '呼叫分机',
        value: 8
    },
    listenSlave: {
        name: '监听分机',
        value: 9
    },
    hangupSlave: {
        name: '挂断分机',
        value: 10
    },
    startBroadcast: {
        name: '启动广播',
        value: 11
    },
    stopBroadcast: {
        name: '停止广播',
        value: 12
    },
    setContent: {
        name: '设置内容',
        value: 13
    },
    resumeContent: {
        name: '恢复内容',
        value: 14
    },
    switchDecoderChannel: {
        name: '设置解码器通道',
        value: 15
    },
    switchMatrixChannel: {
        name: '设置矩阵通道',
        value: 16
    },
    matrixPTZ: {
        name: '矩阵云台控制',
        value: 17
    },
    matrixPreset: {
        name: '矩阵预置位控制',
        value: 18
    },
    setTvwallLayout: {
        name: '设置大屏布局',
        value: 19
    },
    openDoor: {
        name: '开门',
        value: 20
    },
    closeDoor: {
        name: '关门',
        value: 21
    },
    resetArm: {
        name: '复位布防',
        value: 22
    }
};

Object.freeze(deviceControlCode);
exports.default = deviceControlCode;