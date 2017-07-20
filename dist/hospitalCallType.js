/**
 * Created by MyLady on 16/3/29.
 */
'use strict';

module.exports.clinicLevel1 = {
    name: '一级分诊信息',
    value: 0
};
module.exports.clinicLevel2 = {
    name: '二级分诊信息',
    value: 1
};
module.exports.blood = {
    name: '采血化验信息',
    value: 2
};
module.exports.pharmacy = {
    name: '药房取药信息',
    value: 3
};
module.exports.ris = {
    name: '放射检查信息',
    value: 4
};
module.exports.clearArea = {
    name: '清空诊区信息',
    value: 5
};
module.exports.clearAll = {
    name: '清空所有信息',
    value: 6
};

Object.freeze(module.exports);