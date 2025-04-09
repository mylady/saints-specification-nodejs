export declare const DeviceControlCode: {
    awayArm: number;
    stayArm: number;
    disArm: number;
    connectRelay: number;
    disconnectRelay: number;
    byPass: number;
    cancelByPass: number;
    query: number;
    callSlave: number;
    listenSlave: number;
    hangupSlave: number;
    startBroadcast: number;
    stopBroadcast: number;
    setContent: number;
    sesumeContent: number;
    switchDecoderChannel: number;
    switchMatrixChannel: number;
    matrixPTZ: number;
    matrixPreset: number;
    tvWallLayout: number;
    openDoor: number;
    closeDoor: number;
    resetArm: number;
    stayClose: number;
    resumeStatus: number;
    voiceBroadcast: number;
    openWindow: number;
    closeWindow: number;
    stopProcedure: number;
    acOn: number;
    acOff: number;
    acMode: number;
    acTemperature: number;
    cmd: number;
    acSpeed: number;
    enableInterface: number;
    disableInterface: number;
    startInterface: number;
    stopInterface: number;
};
export declare class DeviceControlParam {
    sdk_code: number;
    control_code: number;
    receivers: Array<string>;
    sender?: string;
    parameters?: Array<string>;
    constructor(sdk: number, control: number, receivers: Array<string>, sender?: string, parameters?: Array<string>);
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
export declare class InterfaceInitParam {
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
    constructor(opt: InterfaceInitParamOption);
}
export declare class InterfaceDescripter {
    name: string;
    version: string;
    support_info: string;
    configable: boolean;
    constructor(name: string, version: string, support: string, configable?: boolean);
}
export declare const DeviceEventType: {
    unknown: number;
    status: number;
    normal: number;
    alarm: number;
    fault: number;
};
export declare class DeviceEventData {
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
    constructor(serial: string, resourceCode: number, address: string, eventType: number, desp: string, eventCode?: number, alarmCode?: number, statusCode?: number, faultCode?: number, extra?: object);
}
