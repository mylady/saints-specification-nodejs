'use strict';

let connectionMode = {
    RJ45 : {
        name: '网线连接',
        value: 0
    },
    Fiber : {
        name: '光纤连接',
        value: 1
    },
    Serial : {
        name: '串口连接',
        value: 2
    },
    BNC : {
        name: 'BNC连接',
        value: 3
    },
    VGA : {
        name: 'VGA连接',
        value: 4
    },
    HDMI : {
        name: 'HDMI连接',
        value: 5
    }
};

Object.freeze(connectionMode);
export default connectionMode;