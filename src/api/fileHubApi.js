'use strict';

const Config = require('./../predefined/config'),
    request = require('request'),
    rp = require('request-promise');

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

        if(res.result){
            this.accessToken = res.data;
        }else{
            throw new Error(res.error_msg);
        }
    }

    uploadDocProxy(req,res) {
        if(!this.accessToken){
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: this.hub + '/upload/doc',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    uploadImageProxy(req,res){
        if(!this.accessToken){
            throw new Error('please get access token first');
        }

        req.pipe(request({
            method: 'POST',
            uri: this.hub + '/upload/image',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }
}