import { SpecError } from './error';
export declare namespace RestOption {
    interface RestQueryOption {
        start: number;
        limit?: number;
        sort?: string;
        dir?: string;
        keyword?: string;
    }
    interface RestResponseOption {
        result: boolean;
        err_code?: number;
        err_msg?: string;
        data?: any;
        total?: number;
    }
}
export declare class RestQuery {
    start: number;
    limit: number;
    sort: string;
    dir: string;
    keyword: string;
    constructor(opt: RestOption.RestQueryOption);
}
export declare class RestResponse {
    result: boolean;
    err_code: number;
    err_msg: string;
    data: any;
    total: number;
    constructor(opt: RestOption.RestResponseOption);
    static boolResponse(b: boolean, err: string | Error | SpecError): RestResponse;
    static dataResponse(d: any, cnt: number): RestResponse;
}
