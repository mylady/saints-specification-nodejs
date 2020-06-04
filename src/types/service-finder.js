'use strict';

const rp = require('request-promise'),
    config = require('../code/config'),
    serviceIPHolder = "ip",
    hubAddress = `http://ip:${config.serviceHubPort}/rest`;

export default class ServiceFinder {
    constructor(ip) {
        this.hub = hubAddress.replace(serviceIPHolder, ip);
    }

    async listService() {
        return await rp({
            method: 'GET',
            uri: this.hub + '/list',
            json: true
        });
    }

    async searchService(serviceType) {
        return await rp({
            method: 'GET',
            uri: this.hub + '/search',
            qs: {
                service_type: serviceType
            },
            json: true
        });
    }
}