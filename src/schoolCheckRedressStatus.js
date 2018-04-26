'use strict';

let schoolCheckRedressStatus = {
    no: {
        name: '未整改',
        value: 0
    },
    wait: {
        name: '待整改',
        value: 1
    },
    review: {
        name: '审核中',
        value: 2
    },
    done:{
        name:'已整改',
        value:3
    }
};

Object.freeze(schoolCheckRedressStatus);
export default schoolCheckRedressStatus;


