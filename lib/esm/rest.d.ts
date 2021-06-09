import { SpecError } from './error';
import { Option } from './option';
export declare class RestQuery {
    start: number;
    limit: number;
    sort: string;
    dir: string;
    keyword: string;
    constructor(opt: Option.IRestQueryOption);
}
export declare class RestResponse {
    result: boolean;
    err_code: number;
    err_msg: string;
    data: any;
    total: number;
    constructor(opt: Option.IRestResponseOption);
    static boolResponse(b: boolean, err: string | Error | SpecError): RestResponse;
    static dataResponse(d: any, cnt: number): RestResponse;
}
