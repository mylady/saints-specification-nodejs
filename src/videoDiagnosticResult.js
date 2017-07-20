/**
 * Created by wulei on 17-5-5.
 */
'use strict';

module.exports.unknown = {
    name: '未知',
    value: -1
};
module.exports.normal = {
    name: '正常',
    value: 0
};
module.exports.offline = {
    name: '离线',
    value: 1
};
module.exports.videoLost = {
    name: '视频丢失',
    value: 2
};
module.exports.bright = {
    name: '亮度异常',
    value: 3
};
module.exports.color = {
    name: '颜色异常',
    value: 4
};
module.exports.contract = {
    name: '对比度异常',
    value: 5
};
module.exports.frozen = {
    name: '画面冻结',
    value: 6
};
module.exports.blue = {
    name: '图像模糊',
    value: 7
};
module.exports.noise = {
    name: '噪声干扰',
    value: 8
};
module.exports.wave = {
    name: '强横纹',
    value: 9
};
module.exports.roll = {
    name: '滚屏',
    value: 10
};

Object.freeze(module.exports);
