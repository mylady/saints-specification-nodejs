/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

class InitParam {
    constructor() {
        this.RemoteIPAddress = '';
        this.RemotePort = 0;
        this.LocalPort = 0;
        this.UserName = '';
        this.UserPwd = '';
        this.RemoteServiceAddress = '';
        this.ComPort = '';
        this.BaudRate = 0;
        this.DataBits = 0;
        this.StopBits = 0;
        this.Parity = 0;
        this.ConnectionString = '';
        this.Extra = {};
    }
}

module.exports = InitParam;