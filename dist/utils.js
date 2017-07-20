'use strict';

/**
 * Created by MyLady on 05/05/2017.
 */

var http = require('http'),
    url = require('url');

function post(path, data) {
    return doRequest(path, data, {
        method: 'POST'
    });
}

function postBasicAuth(path, data, username, userpwd) {
    return doRequest(path, data, {
        method: 'POST',
        username: username,
        userpwd: userpwd
    });
}

function put(path, data) {
    return doRequest(path, data, {
        method: 'PUT'
    });
}

function putBasicAuth(path, data, username, userpwd) {
    return doRequest(path, data, {
        method: 'PUT',
        username: username,
        userpwd: userpwd
    });
}

function get(path) {
    return doRequest(path, {}, {
        method: 'GET'
    });
}

function getBasicAuth(path, username, userpwd) {
    return doRequest(path, {}, {
        method: 'GET',
        username: username,
        userpwd: userpwd
    });
}

function doRequest(path, data, option) {
    return new Promise(function (resolve, reject) {
        var parsedUrl = url.parse(path),
            jsonData = JSON.stringify(data);

        var opts = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port,
            path: parsedUrl.pathname,
            method: option.method

        };

        if (option.method === 'POST' || option.method === 'PUT') {
            opts.headers = {
                'Content-Type': 'application/json;charset=utf-8',
                'Content-Length': Buffer.byteLength(jsonData)
            };
        }

        if (option.username && option.userpwd) {
            opts.auth = option.username + ':' + option.userpwd;
        }

        var req = http.request(opts, function (res) {
            if (res.statusCode !== 200) {
                reject(new Error('status code ' + res.body));
                return;
            }

            res.setEncoding('utf8');

            var raw = '';
            res.on('data', function (chunk) {
                raw += chunk;
            });
            res.on('end', function () {
                var respData = JSON.parse(raw);
                resolve(respData);
            });
        });

        req.on('error', function (err) {
            reject(err);
        });

        if (option.method === 'POST' || option.method === 'PUT') {
            req.write(jsonData);
        }

        req.end();
    });
}

module.exports.post = post;
module.exports.postBasicAuth = postBasicAuth;
module.exports.put = put;
module.exports.putBasicAuth = putBasicAuth;
module.exports.get = get;
module.exports.getBasicAuth = getBasicAuth;