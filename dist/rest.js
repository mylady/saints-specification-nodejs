"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestResponse = exports.RestQuery = void 0;
const error_1 = require("./error");
//this is for server process not for client
class RestQuery {
    constructor(opt) {
        this.sort = '';
        this.dir = '';
        this.keyword = '';
        this.start = opt.start;
        this.limit = opt.limit || 0;
        this.sort = opt.sort || '';
        this.dir = opt.dir || '';
        this.keyword = opt.keyword || '';
    }
}
exports.RestQuery = RestQuery;
class RestResponse {
    constructor(opt) {
        this.result = opt.result;
        this.err_code = opt.err_code;
        this.err_msg = opt.err_msg;
        this.data = opt.data;
        this.total = opt.total;
    }
    static boolResponse(b, err) {
        let resp = new RestResponse({ result: b });
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
        let resp = new RestResponse({
            result: true,
            data: d,
            total: cnt
        });
        return resp;
    }
}
exports.RestResponse = RestResponse;
