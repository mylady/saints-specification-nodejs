import moment from 'moment';

export const DeviceControlCode = {
    awayArm: 0,//外出布防
    stayArm: 1,//留守布防
    disArm: 2,//解除布防
    connectRelay: 3,//接通继电器
    disconnectRelay: 4,//断开继电器
    byPass: 5,//旁路
    cancelByPass: 6,//解除旁路
    query: 7,
    callSlave: 8,//呼叫分机
    listenSlave: 9,//监听分机
    hangupSlave: 10,//挂断分机
    startBroadcast: 11,//启动广播
    stopBroadcast: 12,//停止广播
    setContent: 13,//设置内容
    sesumeContent: 14,//恢复内容
    switchDecoderChannel: 15,//设置解码器通道
    switchMatrixChannel: 16,//设置矩阵通道
    matrixPTZ: 17,//矩阵云台控制
    matrixPreset: 18,//矩阵预置位控制
    tvWallLayout: 19,//设置大屏布局
    openDoor: 20,//开门
    closeDoor: 21,//关门
    resetArm: 22,//复位布防
    stayClose: 23,//戒严-常关
    resumeStatus: 24,//恢复-常关
    voiceBroadcast: 25,//语音广播
    openWindow: 26,//开窗
    closeWindow: 27,//关窗
    stopProcedure: 28,//停止流程
    acOn: 29,//打开空调
    acOff: 30,//关闭空调
    acMode: 31,//设置空调模式
    acTemperature: 32,//设置空调温度
    cmd: 33,//命令

    enableInterface: 65500,
    disableInterface: 65501,
    startInterface: 65502,
    stopInterface: 65503
}

export class DeviceControlParam {
    sdk_code: number;
    control_code: number;
    receivers: Array<string>;
    sender?: string;
    parameters?: Array<string>;

    constructor(sdk: number, control: number, receivers: Array<string>, sender?: string, parameters?: Array<string>,) {
        this.sdk_code = sdk;
        this.control_code = control;
        this.receivers = receivers;
        this.sender = sender;
        this.parameters = parameters;
    }
}

export interface InterfaceInitParamOption {
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

export class InterfaceInitParam {
    remote_service_address: string;
    remote_ip_address: string;
    remote_port: number;
    local_port: number;
    user_name: string;
    user_pwd: string;
    com_port: string;
    baud_rate: number;
    data_bits: number;
    stop_bits: number;
    parity: number;
    connection_string: string;
    extra: string;

    constructor(opt: InterfaceInitParamOption) {
        this.remote_service_address = opt.remote_service_address || '';
        this.remote_ip_address = opt.remote_ip_address || '';
        this.remote_port = opt.remote_port || 0;
        this.local_port = opt.local_port || 0;
        this.user_name = opt.user_name || '';
        this.user_pwd = opt.user_pwd || '';
        this.com_port = opt.com_port || '';
        this.baud_rate = opt.baud_rate || 9600;
        this.data_bits = opt.data_bits || 8;
        this.stop_bits = opt.stop_bits || 1;
        this.parity = opt.parity || 0;
        this.connection_string = opt.connection_string || '';
        this.extra = opt.extra || '';
    }
}

export class InterfaceDescripter {
    name: string;
    version: string;
    support_info: string;
    configable: boolean;

    constructor(name: string, version: string, support: string, configable: boolean = false) {
        this.name = name;
        this.version = version;
        this.support_info = support;
        this.configable = configable;
    }
}

export const DeviceEventType = {
    unknown: -1,
    status: 0,
    normal: 1,
    alarm: 2,
    fault: 3
}

export class DeviceEventData {
    serial: string;
    resource_code: number;
    address: string;
    event_type: number;
    event_code: number;
    alarm_code: number;
    status_code: number;
    fault_code: number;
    event_time: string;
    event_desp: string;
    event_extra?: object;

    constructor(serial: string, resourceCode: number, address: string, eventType: number, desp: string, eventCode: number = -1, alarmCode: number = -1, statusCode: number = -1, faultCode: number = -1, extra?: object) {
        this.serial = serial;
        this.resource_code = resourceCode;
        this.address = address;
        this.event_type = eventType;
        this.event_code = eventCode;
        this.alarm_code = alarmCode;
        this.status_code = statusCode;
        this.fault_code = faultCode;
        this.event_time = moment().format('YYYY-MM-DD HH:mm:ss');
        this.event_desp = desp;
        this.event_extra = extra;
    }
}