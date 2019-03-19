'use strict';

export default class RestResponse {
    constructor({ result, err_code, err_msg, data, total }) {
        this.result = result || false;
        this.err_code = err_code || 0;
        this.err_msg = err_msg || '';
        this.data = data || null;
        this.total= total || 0;
    }

    static NewBoolResponse(b, err) {
        let resp = new RestResponse({
            result: b
        });
        if (err) {
            resp.err_msg = err.message;
            resp.err_code = err.code || 0;
        } else {
            resp.err_msg = '';
            resp.err_code = 0;
        }
        return resp;
    }

    static NewDataResponse(d, cnt) {
        let resp = new RestResponse({
            result: true,
            data: d,
            total: cnt
        });
        return resp;
    }
}