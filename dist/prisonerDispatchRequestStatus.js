/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

module.exports.request = {
    name: '申请调监',
    value: 0
};
module.exports.deny = {
    name: '拒绝调监',
    value: 1
};
module.exports.dispatching = {
    name: '调监中',
    value: 2
};
module.exports.done = {
    name: '调监完成',
    value: 3
};

Object.freeze(module.exports);