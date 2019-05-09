'use strict';

const rp = require('request-promise');

export default class LogAPI {
    constructor() {
        this.accessToken = '';
    }

    static async initialize(url) {
        LogAPI.url = url;
    }

    async getAccessToken() {
        if (!this.accessToken) {
            let res = await rp({
                method: 'POST',
                uri: LogAPI.url + '/accesstoken',
                json: true
            });
            this.accessToken = res.data;
        }
    }

    async addPortalLog(log) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: LogAPI.url + '/portal',
            qs: {
                access_token: this.accessToken
            },
            body: log,
            json: true
        });
    }

    async getPortalLog(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/portal',
            qs: query,
            json: true
        });
    }

    async addCommonLog(log) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: LogAPI.url + '/common',
            qs: {
                access_token: this.accessToken
            },
            body: log,
            json: true
        });
    }

    async getCommonLog(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/common',
            qs: query,
            json: true
        });
    }
}

module.exports = IdentityAPI;