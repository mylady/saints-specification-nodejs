'use strict';

const rp = require('request-promise'),
    serviceIPHolder = "address",
    hubAddress = `http://address/rest`;

export default class ServiceFinder {
    constructor(address) {
        this.hub = hubAddress.replace(serviceIPHolder, address);
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