'use strict';

export default class RestResponse {
    constructor() {
        this.result = false;
        this.error_code = 0;
        this.error_msg = '';
        this.data = null;
        this.total_count = 0;
    }

    static NewBoolResponse(b, err) {
        let resp = new RestResponse();
        resp.result = b;
        if (err) {
            resp.error_msg = err.message;
            resp.error_code = err.code || 0;
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