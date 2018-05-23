'use strict';

let schoolNoticeType = {
    centerNotification: {
        name: '教育局公告',
        value: 0
    },
    conferenceNotice: {
        name: '会议通知',
        value: 1
    },
    safetyActivityNotice:{
        name:'安全活动通知',
        value:2
    }
};

Object.freeze(schoolNoticeType);
export default schoolNoticeType;