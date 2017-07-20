/**
 * Created by MyLady on 16/2/19.
 */

let specificationSettings = {
    discoveryHttpPort: 23001,
    discoveryApiPrefix: '/api/v1',
    discoveryLocalHttpAddress: 'http://localhost:' + 23001 + '/api/v1',
    discoveryApiService: 'http://localhost:' + 23001 + '/api/v1' + '/services',
    discoveryApiProduct: 'http://localhost:' + 23001 + '/api/v1' + '/products',
    registerInterval: 5000,
    proxyHttpPort: 23003,
    proxyHttpAddress: 'http://ip:' + 23003 + '/api/v1',
    proxyApiService: 'http://ip:' + 23003 + '/api/v1' + '/services'
};

Object.freeze(specificationSettings);
export default specificationSettings;
