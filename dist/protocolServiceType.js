/**
 * Created by MyLady on 16/2/22.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var protocolServiceType = {
    deviceDataService: 0,
    deviceEventService: 1,
    deviceStatusService: 2,
    maintainService: 3,
    prisonerDataService: 4,
    ssoService: 5,
    digitalService: 6,
    centralUpdateService: 7,
    transmitMessageService: 8,
    serialGatewayService: 9,
    sendMessageServicemodule: 10,
    videoService: 11,
    schoolService: 12,
    prisonService: 13,

    webMapService: 1024,
    webFeatureService: 1025,
    webTiledMapService: 1026,
    arcgisDynamicMapService: 1027,
    arcgisTiledMapService: 1028,
    arcgisGeometryService: 1029
};

Object.freeze(protocolServiceType);
exports.default = protocolServiceType;