/**
 * Created by MyLady on 16/2/22.
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProtocolService = function ProtocolService() {
    _classCallCheck(this, ProtocolService);

    this.ServiceName = '';
    this.ServiceAddress = '';
    this.ServicePort = -1;
    this.UserName = '';
    this.UserPwd = '';
    this.ServiceType = -1;
};

module.exports = ProtocolService;