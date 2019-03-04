'use strict';

let schoolReportEventType = {
    fireProtection: {
        name: '消防安全',
        value: 0
    },
    unstableFactor:{
        name:'不稳定因素',
        value:1
    },
    campusAround: {
        name: '校园周边',
        value: 2
    },
    trafficSafety:{
        name:'交通安全',
        value:3
    },
    foodSanitation: {
        name: '食品卫生及疫情',
        value: 4
    },
    publicSentiment:{
        name:'舆情',
        value:5
    },
    accident: {
        name: '意外伤害',
        value: 6
    },
    criminalCase: {
        name: '刑事案件',
        value: 7
    },
    others:{
        name:'其他',
        value:8
    }
};

Object.freeze(schoolReportEventType);
export default schoolReportEventType;
