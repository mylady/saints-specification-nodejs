'use strict';

let schoolSecurityGroupCustomType = {
    leaderGroup: {
        name: '安全领导小组',
        value: 0
    },
    workGroup: {
        name: '安全工作小组',
        value: 1
    },
    microFireStation: {
        name: '微型消防站',
        value: 2
    },
    external: {
        name: '校外协调机制',
        value: 3
    },
    orgRelation: {
        name: '安全工作网络架构',
        value: 4
    }
};

Object.freeze(schoolSecurityGroupCustomType);
export default schoolSecurityGroupCustomType;
