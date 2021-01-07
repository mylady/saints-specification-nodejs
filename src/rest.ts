import { SpecError } from './error';

//this is for server process not for client
export class RestQuery {
    start: number;
    limit: number;
    sort: string = '';
    dir: string = '';
    keyword: string = '';

    constructor(start: number, limit: number, sort?: string, dir?: string, keyword?: string) {
        this.start = start;
        this.limit = limit;
        this.sort = sort;
        this.dir = dir;
        this.keyword = keyword;
    }
}

export class RestResponse {
    result: boolean;
    err_code: number;
    err_msg: string;
    data: any;
    total: number;

    constructor(result: boolean, err_code: number = 0, err_msg: string = '', data: any = null, total: number = 0) {
        this.result = result;
        this.err_code = err_code;
        this.err_msg = err_msg;
        this.data = data;
        this.total = total;
    }

    static boolResponse(b: boolean, err: string | Error | SpecError) {
        let resp = new RestResponse(b);
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
        let resp = new RestResponse(true, 0, '', d, cnt);
        return resp;
    }
}