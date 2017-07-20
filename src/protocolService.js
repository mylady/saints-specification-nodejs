/**
 * Created by MyLady on 16/2/22.
 */
'use strict';

class ProtocolService {
    constructor() {
        this.ServiceName = '';
        this.ServiceAddress = '';
        this.ServicePort = -1;
        this.UserName = '';
        this.UserPwd = '';
        this.ServiceType = -1;
    }
}

module.exports = ProtocolService;