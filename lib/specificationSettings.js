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

module.exports = SpecificationSettings;