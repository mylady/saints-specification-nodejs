'use strict';

let schoolMessageWrapperType = {
    checkTask: {
        name: '新巡查任务',
        value: 0
    },
    publishRedressTask:{
        name:'发布整改任务',
        value:1
    },
    submitRedressTask:{
        name:'提交整改任务',
        value:2
    },
    reviewRedressTask:{
        name:'复查整改任务',
        value:3
    },
    rejectRedressTask:{
        name:'复查驳回任务',
        value:4
    }
};

Object.freeze(schoolMessageWrapperType);
export default schoolMessageWrapperType;
