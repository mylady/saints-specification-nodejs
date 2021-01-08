import * as moment from 'moment';

export class DoorValue {
    person_name: string;
    person_card: string;
    scene_image: string;
    scene_image_path: string;

    constructor(card: string, name?: string, sceneImage?: string, sceneImagePath?: string) {
        this.person_card = card;
        this.person_name = name;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
    }
}

export class EnvMonitorValue {
    temp: number;
    humi: number;
    hcho: number;
    co2: number;
    pm25: number;
    tvoc: number;
    n3h: number;
    h2s: number;

    constructor(temp: number, humi: number, hcho: number = 0, co2: number = 0, pm25: number = 0, tvoc: number = 0, n3h: number = 0, h2s: number = 0) {
        this.temp = temp;
        this.humi = humi;
        this.hcho = hcho;
        this.co2 = co2;
        this.pm25 = pm25;
        this.tvoc = tvoc;
        this.n3h = n3h;
        this.h2s = h2s;
    }
}

export class PowerGridValue {
    volter: number;
    elec: number;
    constructor(v: number, e: number) {
        this.volter = v;
        this.elec = e;
    }
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

export class RFIDTagValue {
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

    constructor(opt: RFIDTagValueOption) {
        this.x = opt.x || 0;
        this.y = opt.y || 0;
        this.z = opt.z || 0;
        this.tag_id = opt.tag_id || '';
        this.person_id = opt.person_id || '';
        this.battery = opt.battery || 0;
        this.heart_rate = opt.heart_rate || 0;
        this.blood_pressure_high = opt.blood_pressure_high || 0;
        this.blood_pressure_low = opt.blood_pressure_low || 0;
    }
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

export class UPSValue {
    backup_time: string;
    battry: string;
    a_volter: number;
    b_volter: number;
    c_volter: number;
    a_elec: number;
    b_elec: number;
    c_elec: number;

    constructor(opt: UPSValueOption) {
        this.backup_time = opt.backup_time || '';
        this.battry = opt.battry || '';
        this.a_volter = opt.a_volter || 0;
        this.b_volter = opt.b_volter || 0;
        this.c_volter = opt.c_volter || 0;
        this.a_elec = opt.a_elec || 0;
        this.b_elec = opt.b_elec || 0;
        this.c_elec = opt.c_elec || 0;
    }
}

export class CallValue {
    caller: string;
    called: string;

    constructor(caller: string, called: string) {
        this.caller = caller;
        this.called = called;
    }
}

export enum VideoAnalyseType {
    Behavior = 0,
    Face = 1,
    CarPlate = 2
}

export class Face {
    person_id: string;
    person_name: string;
    similarity: number;
    face_image: string;
    face_image_path: string;

    constructor(personId: string, personName: string, similarity: number, faceImage?: string, faceImagePath?: string) {
        this.person_id = personId;
        this.person_name = personName;
        this.similarity = similarity;
        this.face_image = faceImage;
        this.face_image_path = faceImagePath;
    }
}

export class CarPlate {
    plate_number: string;
    plate_color: string;
    plate_type: string;
    car_color: string;

    constructor(platenumber: string, plateColor?: string, plateType?: string, carColor?: string) {
        this.plate_number = platenumber;
        this.plate_color = plateColor;
        this.plate_type = plateType;
        this.car_color = carColor;
    }
}

export class VideoAnalyseValue {
    analyse_type: VideoAnalyseType;
    scene_image: string;
    scene_image_path: string;
    face: Face;
    car: CarPlate;

    constructor(analyseType: VideoAnalyseType, sceneImage?: string, sceneImagePath?: string, face?: Face, car?: CarPlate) {
        this.analyse_type = analyseType;
        this.scene_image = sceneImage;
        this.scene_image_path = sceneImagePath;
        this.face = face;
        this.car = car;
    }
}

export enum DeviceControlCode {
    StopInterface = -1,
    AwayArm = 0,//外出布防
    StayArm = 1,//留守布防
    DisArm = 2,//解除布防
    ConnectRelay = 3,//接通继电器
    DisconnectRelay = 4,//断开继电器
    ByPass = 5,//旁路
    CancelByPass = 6,//解除旁路
    CallSlave = 7,//呼叫分机
    ListenSlave = 8,//监听分机
    HangupSlave = 9,//挂断分机
    StartBroadcast = 10,//启动广播
    StopBroadcast = 11,//停止广播
    SetContent = 12,//设置内容
    ResumeContent = 13,//恢复内容
    SwitchDecoderChannel = 14,//设置解码器通道
    SwitchMatrixChannel = 15,//设置矩阵通道
    MatrixPTZ = 16,//矩阵云台控制
    MatrixPreset = 17,//矩阵预置位控制
    TvWallLayout = 18,//设置大屏布局
    OpenDoor = 19,//开门
    CloseDoor = 20,//关门
    ResetArm = 21,//复位布防
    StayClose = 22,//戒严-常关
    ResumeStatus = 23,//恢复-常关
    VoiceBroadcast = 24,//语音广播
    OpenWindow = 25,//开窗
    CloseWindow = 26,//关窗
    StopProcedure = 27,//停止流程
    AcOn = 28,//打开空调
    AcOff = 29,//关闭空调
    AcMode = 30,//设置空调模式
    AcTemperature = 31,//设置空调温度
    Cmd = 32//命令
}

export class DeviceControlParam {
    sdk_code: number;
    control_code: DeviceControlCode;
    receivers: Array<string>;
    sender: string;
    parameters: Array<string>;

    constructor(sdk: number, control: DeviceControlCode, receivers: Array<string>, parameters?: Array<string>, sender?: string) {
        this.sdk_code = sdk;
        this.control_code = control;
        this.receivers = receivers;
        this.parameters = parameters;
        this.sender = sender;
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

export enum DeviceEventType {
    Unknown = -1,
    Status = 0,
    Normal = 1,
    Alarm = 2,
    Fault = 3
}

export class DeviceEventData {
    resource_code: number;
    address: string;
    event_type: DeviceEventType;
    event_code: number;
    alarm_code: number;
    status_code: number;
    fault_code: number;
    event_time: string;
    event_desp: string;
    event_extra: string;

    constructor(resourceCode: number, address: string, eventType: DeviceEventType, desp: string, eventCode: number = -1, alarmCode: number = -1, statusCode: number = -1, faultCode: number = -1, extra?: string) {
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