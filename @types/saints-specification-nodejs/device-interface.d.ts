export declare class DoorValue {
    person_name: string;
    person_card: string;
    scene_image: string;
    scene_image_path: string;
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
export declare class RFIDTagValue {
    x: number;
    y: number;
    battery: number;
    heart_rate: number;
    constructor(x: number, y: number, battery: number, heartRate?: number);
}
export declare class UPSValue {
    backup_time: string;
    av: number;
    bv: number;
    cv: number;
    ae: number;
    be: number;
    ce: number;
    constructor(backupTime: string, aVolter?: number, bVolter?: number, cVolter?: number, aElec?: number, bElec?: number, cElec?: number);
}
export declare class CallValue {
    master: string;
    slave: string;
    constructor(master: string, slave: string);
}
export declare enum VideoAnalyseType {
    Face = 0,
    Behavior = 1,
    CarPlate = 2
}
export declare class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image: string;
    face_image_path: string;
    constructor(personId: string, personName: string, similarity: number, faceImage?: string, faceImagePath?: string);
}
export declare class CarPlate {
    plate_number: string;
    plate_color: string;
    plate_type: string;
    car_color: string;
    constructor(platenumber: string, plateColor?: string, plateType?: string, carColor?: string);
}
export declare class VideoAnalyseValue {
    analyse_type: VideoAnalyseType;
    scene_image: string;
    scene_image_path: string;
    face: Face;
    car: CarPlate;
    constructor(analyseType: VideoAnalyseType, sceneImage?: string, sceneImagePath?: string, face?: Face, car?: CarPlate);
}
export declare enum DeviceControlCode {
    StopInterface = -1,
    AwayArm = 0,
    StayArm = 1,
    DisArm = 2,
    ConnectRelay = 3,
    DisconnectRelay = 4,
    ByPass = 5,
    CancelByPass = 6,
    CallSlave = 7,
    ListenSlave = 8,
    HangupSlave = 9,
    StartBroadcast = 10,
    StopBroadcast = 11,
    SetContent = 12,
    ResumeContent = 13,
    SwitchDecoderChannel = 14,
    SwitchMatrixChannel = 15,
    MatrixPTZ = 16,
    MatrixPreset = 17,
    TvWallLayout = 18,
    OpenDoor = 19,
    CloseDoor = 20,
    ResetArm = 21,
    StayClose = 22,
    ResumeStatus = 23,
    VoiceBroadcast = 24,
    OpenWindow = 25,
    CloseWindow = 26,
    StopProcedure = 27,
    AcOn = 28,
    AcOff = 29,
    AcMode = 30,
    AcTemperature = 31,
    Cmd = 32
}
export declare class DeviceControlParam {
    sdk_code: number;
    control_code: DeviceControlCode;
    receivers: Array<string>;
    sender: string;
    parameters: Array<string>;
    constructor(sdk: number, control: DeviceControlCode, receivers: Array<string>, parameters?: Array<string>, sender?: string);
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
export declare enum DeviceEventType {
    Status = 0,
    Normal = 1,
    Alarm = 2,
    Fault = 3
}
export declare class DeviceEventData {
    resource_code: number;
    address: string;
    event_type: DeviceEventType;
    event_code: number;
    alarm_code: number;
    status_code: number;
    fault_code: number;
    event_time: string;
    event_description: string;
    event_extra: string;
    constructor(resourceCode: number, address: string, eventType: DeviceEventType, desp: string, eventCode?: number, alarmCode?: number, statusCode?: number, faultCode?: number, extra?: string);
}
