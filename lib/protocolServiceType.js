/**
 * Created by MyLady on 16/2/22.
 */

var ServiceType = {};

ServiceType.deviceDataService = 0;
ServiceType.deviceEventService = 1;
ServiceType.deviceStatusService = 2;
ServiceType.maintainService = 3;
ServiceType.prisonerDataService = 4;
ServiceType.ssoService = 5;
ServiceType.digitalService = 6;
ServiceType.centerUpdateService = 7;
ServiceType.transmitMessageService = 8;
ServiceType.serialGatewayService = 9;
ServiceType.sendMessageService = 10;

ServiceType.webMapService = 1024;
ServiceType.webFeatureService = 1025;
ServiceType.webTiledMapService = 1026;
ServiceType.arcgisDynamicMapService = 1027;
ServiceType.arcgisTiledMapService = 1028;
ServiceType.arcgisGeometryService = 1029;

module.exports = ServiceType;