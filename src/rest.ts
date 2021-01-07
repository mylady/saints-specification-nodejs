import { SpecError } from './error';

export interface RestQueryOption {
    start: number;
    limit?: number;
    sort?: string;
    dir?: string;
    keyword?: string;
}

//this is for server process not for client
export class RestQuery {
    start: number;
    limit: number;
    sort: string = '';
    dir: string = '';
    keyword: string = '';

    constructor(opt: RestQueryOption) {
        this.start = opt.start;
        this.limit = opt.limit || 0;
        this.sort = opt.sort || '';
        this.dir = opt.dir || '';
        this.keyword = opt.keyword || '';
    }
}

export interface RestResponseOption {
    result: boolean;
    err_code?: number;
    err_msg?: string;
    data?: any;
    total?: number;
}

export class RestResponse {
    result: boolean;
    err_code: number;
    err_msg: string;
    data: any;
    total: number;

    constructor(opt: RestResponseOption) {
        this.result = opt.result;
        this.err_code = opt.err_code;
        this.err_msg = opt.err_msg;
        this.data = opt.data;
        this.total = opt.total;
    }

    static boolResponse(b: boolean, err: string | Error | SpecError) {
        let resp = new RestResponse({ result: b });
        if (err) {
            if (err instanceof String) {
                resp.err_msg = err as string;
            } else if (err instanceof SpecError) {
                let specErr = err as SpecError;
                resp.err_msg = specErr.message;
                resp.err_code = specErr.code || 0;
            } else if (err instanceof Error) {
                resp.err_msg = (err as Error).message;
            }
        } else {
            resp.err_msg = '';
            resp.err_code = 0;
        }
        return resp;
    }

    static dataResponse(d: any, cnt: number) {
        let resp = new RestResponse({
            result: true,
            data: d,
            total: cnt
        });
        return resp;
    }
}