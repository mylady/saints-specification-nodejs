'use strict';

const spec = require('./../dist').default,
    ServiceRegister = spec.ServiceRegister,
    Service = spec.Service,
    ServiceType = spec.ServiceType;



let service = {
    address: `http://ip:8001/rest"`,
    type: 4,
    priority: 0
}

let serviceRegister = new ServiceRegister("192.168.0.25", service);
serviceRegister.start();