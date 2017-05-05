/**
 * Created by MyLady on 05/05/2017.
 */

const lib = require('../lib');

let sr = new lib.Discovery.ServiceRegister('192.168.0.24');

let service = new lib.ProtocolService();
service.ServiceAddress = 'http://test';
service.ServiceName = 'test';
service.ServicePort = 80;
service.ServiceType = lib.ProtocolServiceType.arcgisTiledMapService;

sr.addService(service);
sr.startRegister();

let sd = new lib.Discovery.ServiceDiscovery('192.168.0.24');
console.log('get service');
sd.getServices().then((services) => {
    console.log(services);
}).catch((err) => {
    console.err(err);
});