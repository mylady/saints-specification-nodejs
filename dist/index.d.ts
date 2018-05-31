declare namespace spec {

    //classes
    interface AirMonitorExtra {
        Temperature: number;
        Humidity: number;
        HCHO: number;
        CO2: number;
        PM25: number;
        TVOC: number;
        N3H: number;
        H2S: number;
    }

    type SortDir = 'ASC' | 'DESC';

    interface RestQuery {
        Start: number;
        Limit: number;
        Sort: string;
        Direction: SortDir;
        Search: string;
    }

    interface RestQueryConst {
        start: string,
        limit: string,
        sort: string,
        direction: string,
        search: string
    }

    interface RestResponse {
        result: boolean;
        error_msg: string;
        data: any;
        total_count: number;
    }

    interface RestResponseSingle<T> {
        result: boolean;
        error_msg: string;
        data: T;
        total_count: number;
    }

    interface RestResponseMulti<T> {
        result: boolean;
        error_msg: string;
        data: T[];
        total_count: number;
    }

    function NewBoolResponse<T>(b: boolean, errmsg: string): RestResponse;
    function NewDataResponse<T>(d: any, cnt: number): RestResponse;
    function NewBoolResponse<T>(b: boolean, errmsg: string): RestResponseSingle<T>;
    function NewDataResponse<T>(d: T, cnt: number): RestResponseSingle<T>;
    function NewBoolResponse<T>(b: boolean, errmsg: string): RestRespRestResponseMultionse<T>;
    function NewDataResponse<T>(d: T[], cnt: number): RestResponseMulti<T>;


    //enum
    interface EnumValue {
        name: string;
        value: number
    }

    interface SchoolCheckRedressStatus {
        no: EnumValue;
        wait: Enumerator;
        review: EnumValue;
        done: EnumValue;
    }

    interface SchoolCheckTaskStatus{
        notStarted:EnumValue;
        onGoing:EnumValue;
        finish:EnumValue;
    }

}

export = spec;