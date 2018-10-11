'use strict';

export default class RestResponse {
    constructor() {
        this.result = false;
        this.error_msg = '';
        this.data = null;
        this.total_count = 0;
    }

    static NewBoolResponse(b, errmsg) {
        let resp = new RestResponse();
        resp.result = b;
        if (errmsg) {
            resp.error_msg = errmsg
        }
        return resp;
    }

    static NewDataResponse(d, cnt) {
        let resp = new RestResponse();
        resp.result = true;
        resp.data = d;
        resp.total_count = cnt;
        return resp;
    }
}