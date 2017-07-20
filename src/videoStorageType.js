/**
 * Created by wulei on 17-5-5.
 */
'use strict';

let videoStorageType = {
    plan: {
        name: '计划任务',
        value: 0
    },
    event: {
        name: '事件任务',
        value: 1
    },
    custom: {
        name: '自定义任务',
        value: 2
    }
};

Object.freeze(videoStorageType);
export default videoStorageType;