'use strict';

let schoolCanteenType = {
    self: {
        name: '自办食堂',
        value: 0
    },
    contract: {
        name: '托管食堂',
        value: 1
    },
    other:{
        name:'其他',
        value:100
    }
};

Object.freeze(schoolCanteenType);
export default schoolCanteenType;


