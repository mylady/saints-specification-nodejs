'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolChemicalType = {
    poison: {
        name: '剧毒品',
        value: 0
    },
    makeExplosive: {
        name: '易制爆品',
        value: 1
    },
    makePoison: {
        name: '易制毒品',
        value: 2
    },
    others: {
        name: '其他危化品',
        value: 3
    }
};

Object.freeze(schoolChemicalType);
exports.default = schoolChemicalType;