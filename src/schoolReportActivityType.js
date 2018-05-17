'use strict';

let schoolReportActivityType = {
    force: {
        name: '强制参加',
        value: 0
    },
    freeWill:{
        name:'资源参加',
        value:1
    }
};

Object.freeze(schoolReportActivityType);
export default schoolReportActivityType;
