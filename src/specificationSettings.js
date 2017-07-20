/**
 * Created by MyLady on 16/2/19.
 */

let discoveryHttpPort = 23001;
let discoveryApiPrefix = '/api/v1';
let discoveryLocalHttpAddress = 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix;

module.exports.discoveryHttpPort = discoveryHttpPort;
module.exports.discoveryApiPrefix = discoveryApiPrefix;
module.exports.discoveryLocalHttpAddress = discoveryLocalHttpAddress;
module.exports.discoveryApiService = discoveryLocalHttpAddress + '/services';
module.exports.discoveryApiProduct = discoveryLocalHttpAddress + '/products';
module.exports.registerInterval = 5000;

let proxyHttpPort = 23003;
let proxyHttpAddress = 'http://ip:' + proxyHttpPort + discoveryApiPrefix;

module.exports.proxyHttpPort = proxyHttpPort;
module.exports.proxyHttpAddress = proxyHttpAddress;
module.exports.proxyApiService = proxyHttpAddress + '/services';
