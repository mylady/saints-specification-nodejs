/**
 * Created by MyLady on 16/2/19.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var discoveryHttpPort = 23001;
var discoveryApiPrefix = '/api/v1';
var proxyHttpPort = 23003;

var specificationSettings = {
    discoveryHttpPort: discoveryHttpPort,
    discoveryApiPrefix: discoveryApiPrefix,
    discoveryLocalHttpAddress: 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix,
    discoveryApiService: 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix + '/services',
    discoveryApiProduct: 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix + '/products',
    registerInterval: 5000,
    proxyHttpPort: discoveryHttpPort,
    proxyHttpAddress: 'http://ip:' + proxyHttpPort + discoveryApiPrefix,
    proxyApiService: 'http://ip:' + proxyHttpPort + discoveryApiPrefix + '/services'
};

exports.default = specificationSettings;