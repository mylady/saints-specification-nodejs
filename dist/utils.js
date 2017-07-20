'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = post;
exports.postBasicAuth = postBasicAuth;
exports.put = put;
exports.putBasicAuth = putBasicAuth;
exports.get = get;
exports.getBasicAuth = getBasicAuth;
exports.doRequest = doRequest;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by MyLady on 05/05/2017.
 */

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
        var parsedUrl = _url2.default.parse(path),
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

        var req = _http2.default.request(opts, function (res) {
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