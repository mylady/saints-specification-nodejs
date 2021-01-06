export declare enum ServiceType {
    IdentityService = 0,
    FileHub = 1,
    DeviceService = 2,
    CloudProxyService = 3,
    MonitorService = 4,
    MessageHub = 5,
    EventService = 6,
    LogService = 7,
    TimeSerialService = 8
}
export declare class Service {
    address: string;
    type: ServiceType;
    priority: number;
    constructor(address: string, type: ServiceType, priority: number);
}
export declare class ServiceFinder {
    hub: string;
    constructor(ip: string);
    listService(): Promise<unknown>;
    searchService(type: ServiceType): Promise<unknown>;
}
export declare class ServiceRegister {
    private running;
    private timer;
    private hub;
    service: Service;
    constructor(ip: string, service: Service);
    start(): void;
    stop(): void;
}
