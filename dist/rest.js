"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestResponse = exports.RestQuery = void 0;
const error_1 = require("./error");
//this is for server process not for client
class RestQuery {
    constructor(start, limit, sort, dir, keyword) {
        this.sort = '';
        this.dir = '';
        this.keyword = '';
        this.start = start;
        this.limit = limit;
        this.sort = sort;
        this.dir = dir;
        this.keyword = keyword;
    }
}
exports.RestQuery = RestQuery;
class RestResponse {
    constructor(result, err_code = 0, err_msg = '', data = null, total = 0) {
        this.result = result;
        this.err_code = err_code;
        this.err_msg = err_msg;
        this.data = data;
        this.total = total;
    }
    static boolResponse(b, err) {
        let resp = new RestResponse(b);
        if (err) {
            if (err instanceof String) {
                resp.err_msg = err;
            }
            else if (err instanceof error_1.SpecError) {
                let specErr = err;
                resp.err_msg = specErr.message;
                resp.err_code = specErr.code || 0;
            }
            else if (err instanceof Error) {
                resp.err_msg = err.message;
            }
        }
        else {
            resp.err_msg = '';
            resp.err_code = 0;
        }
        return resp;
    }
    static dataResponse(d, cnt) {
        let resp = new RestResponse(true, d, cnt);
        return resp;
    }
}
exports.RestResponse = RestResponse;
