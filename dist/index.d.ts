declare namespace spec {
    interface InterfaceCategoryStatic {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        '14': string;
        '15': string;
        '16': string;
        '17': string;
        '18': string;
        '19': string;
        '20': string;
        '21': string;
        '22': string;
        '23': string;
        '24': string;
        '25': string;
        '26': string;
        '27': string;
        '28': string;
        '29': string;
        '30': string;
        '31': string;
        '32': string;
        '33': string;
        '34': string;
        '35': string;
        '36': string;
        '37': string;
        '38': string;
        '39': string;
        '40': string;
        '41': string;
        '42': string;
        '43': string;
        '44': string;
        '45': string;
        '46': string;
        '47': string;
        '48': string;
        '49': string;
        '50': string;
        '51': string;
        '52': string;
        '53': string;
        '54': string;
        '55': string;
        '56': string;
        '57': string;
        '58': string;
        '59': string;
        '60': string;
        '61': string;
        '62': string;
        '63': string;
        '64': string;
        '65': string;
        '66': string;
        '67': string;
        '68': string;
        '69': string;
        '70': string;
        '71': string;
        '72': string;
        '73': string;
        '74': string;
        '75': string;
        '76': string;
        '77': string;
        '78': string;
        '79': string;
        '80': string;
        '81': string;
        '82': string;
        '83': string;
        '84': string;
        '85': string;
        '86': string;
        '87': string;
        '88': string;
        '89': string;
        '90': string;
        '91': string;
        '92': string;
        '93': string;
        '94': string;
        '95': string;
        '96': string;
        '97': string;
        '10001': string;
    }
    const InterfaceCategory: InterfaceCategoryStatic;

    interface DeviceCodeStatic {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '128': string;
        '129': string;
        '130': string;
        '131': string;
        '256': string;
        '257': string;
        '258': string;
        '259': string;
        '260': string;
        '261': string;
        '262': string;
        '263': string;
        '264': string;
    }
    const InterfaceCategory: InterfaceCategoryStatic;

    interface AlarmTypeStatic {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
    }
    const AlarmType: AlarmTypeStatic;

    interface CameraTypeStatic {
        '0': string;
        '1': string;
    }
    const CameraType: CameraTypeStatic;

    interface ServiceTypeStatic {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
    }
    const ServiceType: ServiceTypeStatic;

    interface ConfigStatic {
        envDevelopment: string;
        envProducton: string;
        defaultConfigPath: string;
        serviceHubPort: number;
    }
    const Config: ConfigStatic;

    interface EnvValue {
        temp: number;
        humi: number;
        hcho: number;
        co2: number;
        pm25: number;
        tvoc: number;
        n3h: number;
        h2s: numbe;
    }

    interface PowerGridValue {
        volter: number;
        elec: number;
    }

    interface RestQuery {
        start: number;
        limit: number;
        sort: string;
        dir: string;
        keyword: string;
    }

    interface RestResponse {
        result: boolean;
        error_code: number;
        error_msg: string;
        data: any;
        total_count: number;
    }

    interface RFIDTagValue {
        x: number;
        y: number;
        battery: number;
        heart_rate: number;
    }

    interface Service {
        address: string;
        type: number;
        priority: number;
    }

    interface ServiceFinder {
        constructor(ip: string): ServiceFinder;
        listService(): List<Service>;
        searchService(): Service;
    }

    interface ServiceRegister {
        constructor(ip: string, service: Service): ServiceRegister;
        start(): void;
        stop(): void;
    }
}

export = spec;