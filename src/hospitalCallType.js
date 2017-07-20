/**
 * Created by MyLady on 16/3/29.
 */
'use strict';

let hospitalCallType = {
    clinicLevel1: {
        name: '一级分诊信息',
        value: 0
    },
    clinicLevel2: {
        name: '二级分诊信息',
        value: 1
    },
    blood: {
        name: '采血化验信息',
        value: 2
    },
    pharmacy: {
        name: '药房取药信息',
        value: 3
    },
    ris: {
        name: '放射检查信息',
        value: 4
    },
    clearArea: {
        name: '清空诊区信息',
        value: 5
    },
    clearAll: {
        name: '清空所有信息',
        value: 6
    }
};

Object.freeze(hospitalCallType);
export default hospitalCallType;
