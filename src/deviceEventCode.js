/**
 * Created by wulei on 17-5-5.
 */

'use strict';

let deviceEventCode = {
    unknown: {
        name: '未知类型',
        value: -1
    },
    doorOpened: {
        name: '门打开',
        value: 0
    },
    doorClosed: {
        name: '门关闭',
        value: 1
    },
    flashOpen: {
        name: '刷卡开门',
        value: 2
    },
    buttonOpen: {
        name: '按钮开门',
        value: 3
    },
    listenSlave: {
        name: '监听分机',
        value: 4
    },
    slaveCallin: {
        name: '分机呼入',
        value: 5
    },
    masterCallin: {
        name: '主机呼入',
        value: 6
    },
    dataUpdate: {
        name: '数据更新',
        value: 7
    },
    faceCapture: {
        name: '人脸捕获',
        value: 8
    }
};

Object.freeze(deviceEventCode);
export default deviceEventCode;