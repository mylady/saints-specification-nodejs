'use strict';

let schoolLicenseType = {
    cateringService:{
        name:'餐饮服务许可证',
        value:0
    },
    canteenContract:{
        name:'食堂承包协议',
        value:1
    },
    canteenDeliveryContract:{
        name:'食堂配送协议',
        value:2
    },
    boxMealProduct:{
        name:'盒饭供应许可证',
        value:3
    },
    canteenBusiness:{
        name:'食堂承包公司营业执照',
        value:4
    },
    deliveryBusiness:{
        name:'配送公司营业执照',
        value:5
    },
    launchBusiness:{
        name:'午餐公司营业执照',
        value:6
    },
    cateringSecurityTrainA:{
        name:'食品安全培训合格证A',
        value:7
    },
    cateringSecurityTrainB:{
        name:'食品安全培训合格证B',
        value:8
    },
    cateringSecurityTrainC:{
        name:'食品安全培训合格证C',
        value:9
    },
    canteenEmployeeHealth:{
        name:'食堂员工健康证',
        value:10
    },
    specialDeviceOperation:{
        name:'特殊设备操作证',
        value:11
    }
};

Object.freeze(schoolLicenseType);
export default schoolLicenseType;
