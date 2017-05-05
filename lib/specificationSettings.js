/**
 * Created by MyLady on 16/2/19.
 */

module.exports.discoveryHttpPort = 23001;
module.exports.discoveryApiPrefix = '/api/v1';
module.exports.discoveryLocalHttpAddress = 'http://localhost:' + SpecificationSettings.discoveryHttpPort + SpecificationSettings.discoveryApiPrefix;
module.exports.discoveryApiService = SpecificationSettings.discoveryLocalHttpAddress + '/services';
module.exports.discoveryApiProduct = SpecificationSettings.discoveryLocalHttpAddress + '/products';
module.exports.registerInterval = 30000;

module.exports.proxyHttpPort = 23003;
module.exports.proxyHttpAddress = 'http://ip:' + SpecificationSettings.proxyHttpPort + SpecificationSettings.discoveryApiPrefix;
module.exports.proxyApiService =SpecificationSettings.proxyHttpAddress+'/services';
