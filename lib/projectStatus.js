/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

module.exports.admin = {
    name: '筹备中',
    value: 0
};
module.exports.police = {
    name: '施工中',
    value: 1
};
module.exports.doctor = {
    name: '试运行',
    value: 2
};
module.exports.doctor = {
    name: '已上线',
    value: 3
};

Object.freeze(module.exports);