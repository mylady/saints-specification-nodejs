/**
 * Created by MyLady on 16/2/19.
 */
let discoveryHttpPort = 23001;
let discoveryApiPrefix = '/api/v1';
let proxyHttpPort = 23003;

let specificationSettings = {
    discoveryHttpPort: discoveryHttpPort,
    discoveryApiPrefix: discoveryApiPrefix,
    discoveryLocalHttpAddress: 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix,
    discoveryApiService: 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix+ '/services',
    discoveryApiProduct: 'http://localhost:' + discoveryHttpPort + discoveryApiPrefix + '/products',
    registerInterval: 5000,
    proxyHttpPort: discoveryHttpPort,
    proxyHttpAddress: 'http://ip:' + proxyHttpPort + discoveryApiPrefix,
    proxyApiService: 'http://ip:' + proxyHttpPort + discoveryApiPrefix + '/services'
};


Object.freeze(specificationSettings);
export default specificationSettings;
