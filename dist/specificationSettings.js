'use strict';

/**
 * Created by MyLady on 16/2/19.
 */

var discoveryHttpPort = 23001;
var discoveryApiPrefix = '/api/v1';
var discoveryLocalHttpAddress = 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix;

module.exports.discoveryHttpPort = discoveryHttpPort;
module.exports.discoveryApiPrefix = discoveryApiPrefix;
module.exports.discoveryLocalHttpAddress = discoveryLocalHttpAddress;
module.exports.discoveryApiService = discoveryLocalHttpAddress + '/services';
module.exports.discoveryApiProduct = discoveryLocalHttpAddress + '/products';
module.exports.registerInterval = 5000;

var proxyHttpPort = 23003;
var proxyHttpAddress = 'http://ip:' + proxyHttpPort + discoveryApiPrefix;

module.exports.proxyHttpPort = proxyHttpPort;
module.exports.proxyHttpAddress = proxyHttpAddress;
module.exports.proxyApiService = proxyHttpAddress + '/services';