/**
 * Created by MyLady on 16/2/19.
 */

var SpecificationSettings = {};

SpecificationSettings.discoveryHttpPort = 23001;
SpecificationSettings.discoveryApiPrefix = '/api/v1';
SpecificationSettings.discoveryLocalHttpAddress = 'http://localhost:' + SpecificationSettings.discoveryHttpPort + SpecificationSettings.discoveryApiPrefix;
SpecificationSettings.discoveryApiService = SpecificationSettings.discoveryLocalHttpAddress + '/services';
SpecificationSettings.discoveryApiProduct = SpecificationSettings.discoveryLocalHttpAddress + '/products';
SpecificationSettings.registerInterval = 30000;

SpecificationSettings.proxyHttpPort = 23003;
SpecificationSettings.proxyHttpAddress = 'http://ip:' + SpecificationSettings.proxyHttpPort + SpecificationSettings.discoveryApiPrefix;
SpecificationSettings.proxyApiService =SpecificationSettings.proxyHttpAddress+'/services';

module.exports = SpecificationSettings;