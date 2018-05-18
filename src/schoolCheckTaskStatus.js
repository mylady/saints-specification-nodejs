'use strict';

let schoolCheckTaskStatus = {
    notStarted: {
        name: '未开始',
        value: 0
    },
    onGoing: {
        name: '进行中',
        value: 1
    },
    finish:{
        name:'已完成',
        value:2
    },
    review:{
        name:'待复查',
        value:3
    }
};

Object.freeze(schoolCheckTaskStatus);
export default schoolCheckTaskStatus;