'use strict';

const rp = require('request-promise');

export default class IdentityAPI {
    static async initialize(url) {
        IdentityAPI.url = url;
        await IdentityAPI.getAccessToken();
    }

    static async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/accesstoken',
            json: true
        });

        if (res.result) {
            IdentityAPI.accessToken = res.data;
        } else {
            throw new Error(res.error_msg);
        }
    }

    static isAvailable() {
        return IdentityAPI.url && IdentityAPI.accessToken;
    }

    async getUserList() {
        if (!IdentityAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: IdentityAPI.url + '/view/user',
            qs: {
                access_token: IdentityAPI.accessToken
            },
            json: true
        });
    }

    async getUser(uid) {
        if (!IdentityAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: IdentityAPI.url + `/view/user/${uid}`,
            qs: {
                access_token: IdentityAPI.accessToken
            },
            json: true
        });
    }

    async login(auth) {
        if (!IdentityAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/auth/login',
            qs: {
                access_token: IdentityAPI.accessToken
            },
            body: auth,
            json: true
        });
    }

    async logout(token) {
        if (!IdentityAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/auth/logout',
            qs: {
                access_token: IdentityAPI.accessToken
            },
            body: {
                token: token
            },
            json: true
        });
    }

    async self(token) {
        if (!IdentityAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: IdentityAPI.url + '/self',
            qs: {
                access_token: IdentityAPI.accessToken
            },
            auth: {
                bearer: token
            },
            json: true
        });
    }
}

module.exports = IdentityAPI;