/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

module.exports.st = {
    name: 'ST(立即服药)',
    value: 0
};
module.exports.qd = {
    name: 'QD(每日一次)',
    value: 1
};
module.exports.bid = {
    name: 'BID(每日两次)',
    value: 2
};
module.exports.tid = {
    name: 'TID(每日三次)',
    value: 3
};
module.exports.qid = {
    name: 'QID(每日四次)',
    value: 4
};
module.exports.qn = {
    name: 'QN(每晚一次)',
    value: 5
};
module.exports.qod = {
    name: 'QOD(隔日一次)',
    value: 6
};

Object.freeze(module.exports);