'use strict';

const rp = require('request-promise');

let url = '';
let accessToken = '';

export default class IdentityAPI {
    static async initialize(url) {
        url = url;
        await getAccessToken();
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: url + '/accesstoken',
            json: true
        });

        if (res.result) {
            accessToken = res.data;
        } else {
            throw new Error(res.error_msg);
        }
    }

    async getUserList() {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + '/view/user',
            qs: {
                access_token: accessToken
            },
            json: true
        });
    }

    async login(auth) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: url + '/auth/login',
            qs: {
                access_token: accessToken
            },
            body: auth,
            json: true
        });
    }

    async logout(token) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: url + '/auth/logout',
            qs: {
                access_token: accessToken
            },
            body: {
                token: token
            },
            json: true
        });
    }

    async self(token) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + '/self',
            qs: {
                access_token: accessToken
            },
            auth: {
                bearer: token
            },
            json: true
        });
    }
}

module.exports = IdentityAPI;