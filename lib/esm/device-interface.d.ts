import { Option } from './option';
export declare class DoorValue {
    person_name?: string;
    person_card: string;
    scene_image?: string;
    scene_image_path?: string;
    constructor(card: string, name?: string, sceneImage?: string, sceneImagePath?: string);
}
export declare class EnvMonitorValue {
    temp: number;
    humi: number;
    hcho: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;
    constructor(temp: number, humi: number, hcho?: number, co2?: number, pm25?: number, tvoc?: number, n3h?: number, h2s?: number);
}
export declare class PowerGridValue {
    volter: number;
    elec: number;
    constructor(v: number, e: number);
}
export interface RFIDTagValueOption {
    x: number;
    y: number;
    z?: number;
    tag_id: string;
    person_id?: string;
    person_name?: string;
    battery: number;
    heart_rate?: number;
    blood_pressure_high?: number;
    blood_pressure_low?: number;
}
export declare class RFIDTagValue {
    x: number;
    y: number;
    z: number;
    tag_id: string;
    person_id: string;
    person_name: string;
    battery: number;
    heart_rate: number;
    blood_pressure_high: number;
    blood_pressure_low: number;
    constructor(opt: RFIDTagValueOption);
}
export interface RelayValueOption {
    switch_state: number;
    enabled: boolean;
}
export declare class RelayValue {
    switch_state: number;
    enabled: boolean;
    constructor(opt: RelayValueOption);
}
export interface UPSValueOption {
    backup_time: string;
    battry: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;
}
export declare class UPSValue {
    backup_time: string;
    battry: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;
    constructor(opt: UPSValueOption);
}
export declare class CallValue {
    caller: string;
    called: string;
    constructor(caller: string, called: string);
}
export declare enum VideoAnalyseType {
    Behavior = 0,
    Face = 1,
    CarPlate = 2
}
export declare class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image?: string;
    face_image_path?: string;
    constructor(personId: string, personName: string, similarity: number, faceImage?: string, faceImagePath?: string);
}
export declare class CarPlate {
    plate_number: string;
    plate_color?: string;
    plate_type?: string;
    car_color?: string;
    constructor(plateNumber: string, plateColor?: string, plateType?: string, carColor?: string);
}
export declare class VideoAnalyseValue {
    analyse_type: VideoAnalyseType;
    scene_image?: string;
    scene_image_path?: string;
    face?: Face;
    car?: CarPlate;
    constructor(analyseType: VideoAnalyseType, sceneImage?: string, sceneImagePath?: string, face?: Face, car?: CarPlate);
}
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
    constructor(opt: Option.IInterfaceInitParamOption);
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
