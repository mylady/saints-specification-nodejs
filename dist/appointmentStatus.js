'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var appointmentStatus = {
    wait: {
        name: '待审核',
        value: 0
    },
    auditing: {
        name: '审核中',
        value: 1
    },
    audited: {
        name: '已审核',
        value: 2
    }
};

Object.freeze(appointmentStatus);
exports.default = appointmentStatus;