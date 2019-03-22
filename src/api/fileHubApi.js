'use strict';

const request = require('request'),
    rp = require('request-promise');

/*
    for upload file proxy,it uses nodejs default req&res object.
    if you use koa like framework,which wrapper req and res in context object
    you need set like koa, ctx.respond = false to interupt koa response
*/

export default class FileHubAPI {
    static async initialize(url) {
        FileHubAPI.url = url;
        await FileHubAPI.getAccessToken();
    }

    static async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/accesstoken',
            json: true
        });

        if (res.result) {
            FileHubAPI.accessToken = res.data;
        } else {
            throw new Error(res.error_msg);
        }
    }

    static isAvailable() {
        return FileHubAPI.url && FileHubAPI.accessToken;
    }

    uploadDocProxy(req, res) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: FileHubAPI.url + '/upload/doc',
            qs: {
                access_token: FileHubAPI.accessToken
            }
        })).pipe(res);
    }

    downloadDocProxy(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'GET',
            uri: FileHubAPI.url + `/download/doc/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            }
        })).pipe(res);
    }

    async searchDoc(search) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/search/doc',
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: search,
            json: true
        });
    }

    async getDocDetail(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/detail/doc/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            json: true
        });
    }

    async getDocs(ids) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/query/doc',
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: ids,
            json: true
        });
    }

    uploadImageProxy(req, res) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: FileHubAPI.url + '/upload/image',
            qs: {
                access_token: FileHubAPI.accessToken
            }
        })).pipe(res);
    }

    downloadAttachProxy(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'GET',
            uri: FileHubAPI.url + `/download/image/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            }
        })).pipe(res);
    }

    async getImageDetail(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/detail/image/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            json: true
        });
    }

    async getImages(ids) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/query/image',
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: ids,
            json: true
        });
    }

    uploadAttachProxy(req, res) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: FileHubAPI.url + '/upload/attach',
            qs: {
                access_token: FileHubAPI.accessToken
            }
        })).pipe(res);
    }

    downloadAttachProxy(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'GET',
            uri: FileHubAPI.url + `/download/attach/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            }
        })).pipe(res);
    }

    async getAttachDetail(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/detail/attach/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            json: true
        });
    }

    async getAttaches(ids) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/query/attach',
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: ids,
            json: true
        });
    }
}