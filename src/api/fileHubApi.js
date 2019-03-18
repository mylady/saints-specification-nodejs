'use strict';

const  request = require('request'),
    rp = require('request-promise');

/*
    for upload file proxy,it uses nodejs default req&res object.
    if you use koa like framework,which wrapper req and res in context object
    you need set like koa, ctx.respond = false to interupt koa response
*/

export default class FileHubAPI {
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

    uploadDocProxy(req, res) {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: this.url + '/upload/doc',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    async searchDoc(search){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: this.url + '/search/doc',
            qs: {
                access_token: this.accessToken
            },
            body:search,
            json: true
        });
    }

    async getDocDetail(id){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + `/doc/detail/${id}`,
            qs: {
                access_token: this.accessToken
            },
            body:search,
            json: true
        });
    }

    async getDocs(ids){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: this.url + '/query/doc',
            qs: {
                access_token: this.accessToken
            },
            body:ids,
            json: true
        });
    }

    async getDocURL(id){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + `/doc/download/${id}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    uploadImageProxy(req, res) {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: this.url + '/upload/image',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    async getImageDetail(id){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + `/image/detail/${id}`,
            qs: {
                access_token: this.accessToken
            },
            body:search,
            json: true
        });
    }

    async getImages(ids){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: this.url + '/query/image',
            qs: {
                access_token: this.accessToken
            },
            body:ids,
            json: true
        });
    }

    async getImageURL(id){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + `/image/download/${id}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    uploadAttachProxy(req, res) {
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: this.url + '/upload/attach',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    async getAttachDetail(id){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + `/attach/detail/${id}`,
            qs: {
                access_token: this.accessToken
            },
            body:search,
            json: true
        });
    }

    async getAttaches(ids){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'POST',
            uri: this.url + '/query/attach',
            qs: {
                access_token: this.accessToken
            },
            body:ids,
            json: true
        });
    }

    async getAttachURL(id){
        if (!this.accessToken) {
            throw new Error('please get access token first');
        }

        return await rp({
            method: 'GET',
            uri: this.url + `/attach/download/${id}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }
}