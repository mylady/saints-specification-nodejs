'use strict';

const config = require('./../predefined/config'),
    util = require('util'),
    rp = require('request-promise'),
    setIntervalPromise = util.promisify(setInterval),
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
        this.timer = setIntervalPromise(serviceRegisterInterval)
            .then(() => {
                try {
                    registerService(this.hub, this.service);
                } catch (err) {
                    console.error('register service failed', err);
                }
            });
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
    await rp({
        method: 'POST',
        uri: url,
        body: service,
        json: true
    });
}