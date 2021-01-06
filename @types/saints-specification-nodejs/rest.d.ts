import { SpecError } from './error';
export declare class RestQuery {
    start: number;
    limit: number;
    sort: string;
    dir: string;
    keyword: string;
    constructor(start: number, limit: number, sort?: string, dir?: string, keyword?: string);
}
export declare class RestResponse {
    result: boolean;
    err_code: number;
    err_msg: string;
    data: any;
    total: number;
    constructor(result: boolean, err_code?: number, err_msg?: string, data?: any, total?: number);
    static boolResponse(b: boolean, err: string | Error | SpecError): RestResponse;
    static dataResponse(d: any, cnt: any): RestResponse;
}
