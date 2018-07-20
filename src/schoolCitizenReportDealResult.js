'use strict';

let schoolCitizenReportDealResult = {
    processing: {
        name: '正在处理',
        value: 0
    },
    reject: {
        name: '退回重派',
        value: 1
    },
    onTime: {
        name: '按期完结',
        value: 2
    },
    overTime: {
        name: '超期完结',
        value: 3
    }
};

Object.freeze(schoolCitizenReportDealResult);
export default schoolCitizenReportDealResult;