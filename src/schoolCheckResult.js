'use strict';

let schoolCheckResult = {
    none: {
        name: '无',
        value: 0
    },
    pass: {
        name: '合格',
        value: 1
    },
    fail:{
        name: '不合格',
        value: 2
    }
};

Object.freeze(schoolCheckResult);
export default schoolCheckResult;


