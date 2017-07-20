/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

module.exports.none = {
    name: '无类型',
    value: 0
};
module.exports.prisonDistrict = {
    name: '监区',
    value: 1
};
module.exports.prisonCell = {
    name: '监房',
    value: 2
};
module.exports.prisonBed = {
    name: '监床',
    value: 3
};
module.exports.prisoner = {
    name: '在押人员',
    value: 4
};

Object.freeze(module.exports);