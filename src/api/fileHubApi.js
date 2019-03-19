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

    static isAvailable(){
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
            uri: FileHubAPI.url + `/doc/detail/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: search,
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

    async getDocURL(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/doc/download/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
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

    async getImageDetail(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/image/detail/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: search,
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

    async getImageURL(id) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/image/download/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
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

    async getAttachDetail(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/attach/detail/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            body: search,
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

    async getAttachURL(id) {
        if (!FileHubAPI.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/attach/download/${id}`,
            qs: {
                access_token: FileHubAPI.accessToken
            },
            json: true
        });
    }
}