'use strict';

const  request = require('request'),
    rp = require('request-promise');

/*
    for upload file proxy,it uses nodejs default req&res object.
    if you use koa like framework,which wrapper req and res in context object
    you need set like koa, ctx.respond = false to interupt koa response
*/
let url = '';
let accessToken = '';

export default class FileHubAPI {
    static async initialize(url){
        url = url;
        await FileHubAPI.getAccessToken();
    }

    static async getAccessToken() {
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

    uploadDocProxy(req, res) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: url + '/upload/doc',
            qs: {
                access_token: accessToken
            }
        })).pipe(res);
    }

    async searchDoc(search){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: url + '/search/doc',
            qs: {
                access_token: accessToken
            },
            body:search,
            json: true
        });
    }

    async getDocDetail(id){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + `/doc/detail/${id}`,
            qs: {
                access_token: accessToken
            },
            body:search,
            json: true
        });
    }

    async getDocs(ids){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: url + '/query/doc',
            qs: {
                access_token: accessToken
            },
            body:ids,
            json: true
        });
    }

    async getDocURL(id){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + `/doc/download/${id}`,
            qs: {
                access_token: accessToken
            },
            json: true
        });
    }

    uploadImageProxy(req, res) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: url + '/upload/image',
            qs: {
                access_token: accessToken
            }
        })).pipe(res);
    }

    async getImageDetail(id){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + `/image/detail/${id}`,
            qs: {
                access_token: accessToken
            },
            body:search,
            json: true
        });
    }

    async getImages(ids){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: url + '/query/image',
            qs: {
                access_token: accessToken
            },
            body:ids,
            json: true
        });
    }

    async getImageURL(id){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + `/image/download/${id}`,
            qs: {
                access_token: accessToken
            },
            json: true
        });
    }

    uploadAttachProxy(req, res) {
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: url + '/upload/attach',
            qs: {
                access_token: accessToken
            }
        })).pipe(res);
    }

    async getAttachDetail(id){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + `/attach/detail/${id}`,
            qs: {
                access_token: accessToken
            },
            body:search,
            json: true
        });
    }

    async getAttaches(ids){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: url + '/query/attach',
            qs: {
                access_token: accessToken
            },
            body:ids,
            json: true
        });
    }

    async getAttachURL(id){
        if (!accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: url + `/attach/download/${id}`,
            qs: {
                access_token: accessToken
            },
            json: true
        });
    }
}