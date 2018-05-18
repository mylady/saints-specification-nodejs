'use strict';

let schoolWaterSource = {
    directWater: {
        name: '直饮水',
        value: 0
    },
    directWaterMachine: {
        name: '直饮水机',
        value: 1
    },
    cistern:{
        name:'蓄水池',
        value:2
    },
    waterBox:{
        name:'水箱',
        value:3
    },
    heatPreserved:{
        name:'保温桶',
        value:4
    },
    barrel:{
        name:'桶装水',
        value:5
    }
};

Object.freeze(schoolWaterSource);
export default schoolWaterSource;


