import { SpecError } from './error';
//this is for server process not for client
export class RestQuery {
    constructor(opt) {
        this.start = opt.start || 0;
        this.limit = opt.limit || 0;
        this.sort = opt.sort || '';
        this.dir = opt.dir || '';
        this.keyword = opt.keyword || '';
    }
}
export class RestResponse {
    constructor(opt) {
        this.result = opt.result || false;
        this.err_code = opt.err_code || 0;
        this.err_msg = opt.err_msg || '';
        this.data = opt.data;
        this.total = opt.total || 0;
    }
    static boolResponse(b, err) {
        let resp = new RestResponse({ result: b });
        if (err) {
            if (typeof err === 'string') {
                resp.err_msg = err;
            }
            else if (err instanceof SpecError) {
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
