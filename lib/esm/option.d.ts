export declare namespace Option {
    interface IRestQueryOption {
        start: number;
        limit?: number;
        sort?: string;
        dir?: string;
        keyword?: string;
    }
    interface IRestResponseOption {
        result: boolean;
        err_code?: number;
        err_msg?: string;
        data?: any;
        total?: number;
    }
    interface IInterfaceInitParamOption {
        remote_service_address?: string;
        remote_ip_address?: string;
        remote_port?: number;
        local_port?: number;
        user_name?: string;
        user_pwd?: string;
        com_port?: string;
        baud_rate?: number;
        data_bits?: number;
        stop_bits?: number;
        parity?: number;
        connection_string?: string;
        extra?: string;
    }
}
