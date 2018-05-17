'use strict';

let schoolMessageType = {
    incipientFault: {
        name: '隐患',
        value: 0
    },
    notice:{
        name:'通知',
        value:1
    },
    mail:{
        name:'邮件',
        value:2
    },
    task:{
        name:'任务',
        value:3
    },
    eventReport:{
        name:'事件上报',
        value:4
    }
};

Object.freeze(schoolMessageType);
export default schoolMessageType;
