/**
 * Created by wulei on 17-5-5.
 */
'use strict';

let deviceEventType = {
    normalEvent: {
        name: '一般事件',
        value: 0
    },
    alarmEvent: {
        name: '报警事件',
        value: 1
    },
    statusEvent: {
        name: '状态时间',
        value: 2
    }
};

Object.freeze(deviceEventType);
export default deviceEventType;