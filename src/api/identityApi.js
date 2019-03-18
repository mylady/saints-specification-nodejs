'use strict';

const rp = require('request-promise');

export default class IdentityAPI {
    constructor(url) {
        this.url = url;
        this.accessToken = '';
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: this.url + '/accesstoken',
            json: true
        });

        if (res.result) {
            this.accessToken = res.data;
        } else {
            throw new Error(res.error_msg);
        }
    }

    async getUserList() {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + '/view/user',
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async login(auth) {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: this.url + '/auth/login',
            qs: {
                access_token: this.accessToken
            },
            body: auth,
            json: true
        });
    }

    async logout(token) {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: this.url + '/auth/logout',
            qs: {
                access_token: this.accessToken
            },
            body: {
                token: token
            },
            json: true
        });
    }

    async self(token) {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + '/self',
            qs: {
                access_token: this.accessToken
            },
            auth: {
                bearer: token
            },
            json: true
        });
    }
}

module.exports = IdentityAPI;