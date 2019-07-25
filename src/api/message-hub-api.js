'use strict';

const rp = require('request-promise');

export default class MessageHubAPI {
    constructor() {
        this.accessToken = '';
    }

    static async initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }
        
        if (url.lastIndexOf('/') === url.length - 1) {
            MessageHubAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            MessageHubAPI.url = url;
        }
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: MessageHubAPI.url + '/accesstoken',
            json: true
        });
        this.accessToken = res.data;
    }

    async getInternalMessage(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: MessageHubAPI.url + '/internal',
            qs: query,
            json: true
        });
    }

    async getTransmitMessage(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: MessageHubAPI.url + '/transmit',
            qs: query,
            json: true
        });
    }
}