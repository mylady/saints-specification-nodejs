/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

module.exports.owner = {
    name: '业主',
    value: 0
};
module.exports.manager = {
    name: '总包',
    value: 1
};
module.exports.maintainer = {
    name: '运维人员',
    value: 2
};
module.exports.supervisor = {
    name: '监理',
    value: 3
};

Object.freeze(module.exports);