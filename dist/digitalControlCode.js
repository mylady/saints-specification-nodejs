/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var digitalControlCode = {
  normalPlay: {
    name: '常态播放',
    value: 0
  },
  stickPlay: {
    name: '插播',
    value: 1
  },
  lockControl: {
    name: '锁定控制',
    value: 2
  },
  unlockControl: {
    name: '解除锁定控制',
    value: 3
  },
  reboot: {
    name: '重启',
    value: 4
  },
  marquee: {
    name: '字母',
    value: 5
  },
  speech: {
    name: '语音',
    value: 6
  },
  screenShot: {
    name: '截屏',
    value: 7
  },
  volume: {
    name: '音量',
    value: 8
  },
  ntpSync: {
    name: '时间同步',
    value: 9
  }
};
Object.freeze(digitalControlCode);
var _default = digitalControlCode;
exports.default = _default;