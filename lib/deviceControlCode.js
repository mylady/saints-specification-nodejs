/**
 * Created by wulei on 17-5-5.
 */
'use strict';

module.exports.outarm = {
    name: '外出布防',
    value: 0
};
module.exports.stayarm = {
    name: '留守布防',
    value: 1
};
module.exports.disarm = {
    name: '解除布防',
    value: 2
};
module.exports.donnectRelay = {
    name: '接通继电器',
    value: 3
};
module.exports.disconnectRelay = {
    name: '断开继电器',
    value: 4
};
module.exports.bypass = {
    name: '旁路',
    value: 5
};
module.exports.cancelBypass = {
    name: '取消旁路',
    value: 6
};
module.exports.queryArm = {
    name: '查询防区状态',
    value: 7
};
module.exports.callSlave = {
    name: '呼叫分机',
    value: 8
};
module.exports.listenSlave = {
    name: '监听分机',
    value: 9
};
module.exports.hangupSlave = {
    name: '挂断分机',
    value: 10
};
module.exports.startBroadcast = {
    name: '启动广播',
    value: 11
};
module.exports.stopBroadcast = {
    name: '停止广播',
    value: 12
};
module.exports.setContent = {
    name: '设置内容',
    value: 13
};
module.exports.resumeContent = {
    name: '恢复内容',
    value: 14
};
module.exports.switchDecoderChannel = {
    name: '设置解码器通道',
    value: 15
};
module.exports.switchMatrixChannel = {
    name: '设置矩阵通道',
    value: 16
};
module.exports.matrixPTZl = {
    name: '矩阵云台控制',
    value: 17
};
module.exports.matrixPreset = {
    name: '矩阵预置位控制',
    value: 18
};
module.exports.setTvwallLayout = {
    name: '设置大屏布局',
    value: 19
};
module.exports.openDoor = {
    name: '开门',
    value: 20
};
module.exports.closeDoor = {
    name: '关门',
    value: 21
};

Object.freeze(module.exports);
