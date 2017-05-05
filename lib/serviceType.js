/**
 * Created by wulei on 17-5-5.
 */
'use strict';

//0-1023 service provided by saints
module.exports.deviceDataService = 0;
module.exports.deviceEventService = 1;
module.exports.deviceStatusService = 2;
module.exports.maintainService = 3;
module.exports.prisonerDataService = 4;
module.exports.SSOService = 5;
module.exports.digitalService = 6;
module.exports.centralUpdateService = 7;
module.exports.transmitMessageService = 8;
module.exports.serialGatewayService = 9;
module.exports.sendMessageService = 10;
module.exports.videoService = 11;
module.exports.schoolService = 12;
module.exports.prisonService = 13;

//1024 - 2048 service provided by third party
module.exports.webMapService = 1024;
module.exports.webFeatureService = 1025;
module.exports.webTiledMapService = 1026;
module.exports.arcgisDynamicMapService = 1027;
module.exports.arcgisTiledMapService = 1028;
module.exports.arcgisGeometryService = 1029;


Object.freeze(exports);