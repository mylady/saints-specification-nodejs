/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

module.exports.none = {
    name: '无状态',
    value: 0
};
module.exports.waitingArraign = {
    name: '待提审',
    value: 1
};
module.exports.arraigning = {
    name: '提审中',
    value: 2
};
module.exports.endingArraign = {
    name: '提审待结束',
    value: 3
};
module.exports.endArraign = {
    name: '提审结束',
    value: 4
};
module.exports.waitingMeeting = {
    name: '待会见',
    value: 5
};
module.exports.meeting = {
    name: '会见中',
    value: 6
};
module.exports.endingMeeting = {
    name: '会见待结束',
    value: 7
};
module.exports.endMeeting = {
    name: '会见结束',
    value: 8
};

Object.freeze(module.exports);