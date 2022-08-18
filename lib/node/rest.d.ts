import { SpecError } from './error';
export interface RestQueryOption {
    start: number;
    limit?: number;
    sort?: string;
    dir?: string;
    keyword?: string;
}
export declare class RestQuery {
    start: number;
    limit: number;
    sort: string;
    dir: string;
    keyword: string;
    constructor(opt: RestQueryOption);
}
export interface RestResponseOption {
    result: boolean;
    err_code?: number;
    err_msg?: string;
    data?: any;
    total?: number;
}
export declare class RestResponse {
    result: boolean;
    err_code: number;
    err_msg: string;
    data: any;
    total: number;
    constructor(opt: RestResponseOption);
    static boolResponse(b: boolean, err: string | Error | SpecError): RestResponse;
    static dataResponse(d: any, cnt: number): RestResponse;
}
