import { CodeMap } from './code-map';
export declare const ServiceType: {
    unknown: CodeMap;
    identityService: CodeMap;
    fileHub: CodeMap;
    deviceService: CodeMap;
    cloudProxyService: CodeMap;
    monitorService: CodeMap;
    messageHub: CodeMap;
    eventService: CodeMap;
    logService: CodeMap;
    timeSerialService: CodeMap;
};
export declare class Service {
    address: string;
    type: number;
    priority: number;
    constructor(address: string, type: number, priority: number);
}
