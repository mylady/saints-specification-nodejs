/**
 * Created by wulei on 17-5-5.
 */
'use strict';

module.exports.normalPlay = {
    name: '常态播放',
    value: 0
};
module.exports.stickPlay = {
    name: '插播',
    value: 1
};
module.exports.lockControl = {
    name: '锁定控制',
    value: 2
};
module.exports.unlockControl = {
    name: '解除锁定控制',
    value: 3
};
module.exports.reboot = {
    name: '重启',
    value: 4
};
module.exports.marquee = {
    name: '字母',
    value: 5
};
module.exports.speech = {
    name: '语音',
    value: 6
};
module.exports.screenShot = {
    name: '截屏',
    value: 7
};
module.exports.volume = {
    name: '音量',
    value: 8
};
module.exports.ntpSync = {
    name: '时间同步',
    value: 9
};

Object.freeze(module.exports);
