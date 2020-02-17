'use strict';

let schoolCheckPlanStatus = {
    planning: {
        name: '计划中',
        value: 0
    },
    published: {
        name: '已发布',
        value: 1
    },
    obsolete:{
        name:'已弃用',
        value:2
    }
};

Object.freeze(schoolCheckPlanStatus);
export default schoolCheckPlanStatus;

