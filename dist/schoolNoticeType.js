'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolNoticeType = {
    centerNotification: {
        name: '教育局公告',
        value: 0
    },
    conferenceNotice: {
        name: '会议通知',
        value: 1
    },
    safetyActivityNotice: {
        name: '安全活动通知',
        value: 2
    },
    urgeReportTable: {
        name: '催促报表提交',
        value: 3
    },
    urgeActivityReport: {
        name: '催促活动上报',
        value: 4
    },
    urgeDutyTable: {
        name: '催促值班表提交',
        value: 5
    },
    urgeSafetyReport: {
        name: '催促平安上报',
        value: 6
    },
    urgeLicenseExpire: {
        name: '催促证照过期',
        value: 7
    }
};

Object.freeze(schoolNoticeType);
exports.default = schoolNoticeType;