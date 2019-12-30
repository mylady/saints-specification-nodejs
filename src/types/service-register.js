'use strict';

const config = require('./../predefined/config'),
    rp = require('request-promise'),
    serviceIPHolder = "ip",
    serviceRegisterInterval = 10,
    registerAddress = `http://ip:${config.serviceHubPort}/rest/register`;

export default class ServiceRegister {
    constructor(ip, service) {
        this.running = false;
        this.timer = null;
        this.service = service;
        this.hub = registerAddress.replace(serviceIPHolder, ip);
    }

    start() {
        if (this.running) {
            return;
        }

        this.running = true;
        this.timer = setInterval(() => {
            registerService(this.hub, this.service);
        }, serviceRegisterInterval * 1000);
    }

    stop() {
        if (!this.running) {
            return;
        }

        if (this.timer) {
            this.running = false;
            clearInterval(this.timer);
        }
    }
}

const registerService = async (url, service) => {
    try {
        let res = await rp({
            method: 'POST',
            uri: url,
            body: service,
            json: true
        });
        if (!res.result) {
            console.error('register service failed', res.error_msg);
        }
    } catch (err) {
        console.error('register service failed', err.message);
    }
}