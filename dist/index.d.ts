declare namespace spec {

    interface SpecValue {
        name: string;
        value: number;
    }


    interface AirMonitorExtra {
        Temperature?: number;
        Humidity?: number;
        HCHO?: number;
        CO2?: number;
        PM25?: number;
        TVOC?: number;
        N3H?: number;
        H2S?: number;
    }

    interface BehaviorAnalyseExtra {
        SceneImagePath?: string;
        SceneImage?: string;
    }

    interface BioIdentifyMessage {
        IdentifyType?: number;
        IdentifyTime?: Date;
        IdentifyContent?: string;
    }

    interface BioIdentifyTypeStatic {
        fingerPrint: SpecValue;
        faceRecognition: SpecValue;
        voicePrint: SpecValue;
    }

    const BioIdentifyType: BioIdentifyTypeStatic;

    interface CallExtra {
        Caller?: string;
        Called?: string;
    }

    interface CameraTypeStatic {
        gun: SpecValue;
        ball: SpecValue;
    }

    const CameraType: CameraTypeStatic;

    interface CarPlateRecognitionExtra {
        SceneImagePath?: string;
        SceneImage?: string;
        PlateNumber?: string;
        PlateType?: string;
        CarColor?: string;
        PlateColor?: string;
    }

    interface ConnectionModeStatic {
        RJ45: SpecValue;
        Fiber: SpecValue;
        Serial: SpecValue;
        BNC: SpecValue;
        VGA: SpecValue;
        HDMI: SpecValue;
    }

    const ConnectionMode: ConnectionModeStatic;

    interface CpuInfo {
        CpuModel?: string,
        CoreNumber?: number,
        CpuFrequency?: number,
        CpuLoad?: string
    }

    interface Descripter {
        Name?: string,
        Version?: string,
        Support?: string,
        Configable?: boolean
    }

    interface DeviceAlarmCodeStatic {
        unknow: SpecValue,
        areaAlarm: SpecValue,
        motionDetect: SpecValue,
        videoLost: SpecValue,
        videoShelter: SpecValue,
        soundCheck: SpecValue,
        diskFull: SpecValue,
        diskFault: SpecValue,
        soundLost: SpecValue,
        deviceAbnormal: SpecValue,
        areaIntrusion: SpecValue,
        limitHeight: SpecValue,
        wander: SpecValue,
        raiseup: SpecValue,
        targetLost: SpecValue,
        abnormalBehavior: SpecValue,
        objectLeft: SpecValue,
        stay: SpecValue,
        timeout: SpecValue,
        invalidOperation: SpecValue,
        threatOperation: SpecValue,
        remove: SpecValue,
        offline: SpecValue,
        powerUnstable: SpecValue,
        disturb: SpecValue,
        deviceLost: SpecValue,
        bypass: SpecValue,
        inactive: SpecValue,
        recordStop: SpecValue,
        powerAbnormal: SpecValue,
        videoQuality: SpecValue,
        dutyCheck: SpecValue,
        fierceMotion: SpecValue,
        deviceFault: SpecValue,
        audioLost: SpecValue,
        fanFault: SpecValue,
        temperatureAlarm: SpecValue,
        humidityAlarm: SpecValue,
        doorPointAlarm: SpecValue,
        forceOperation: SpecValue,
        decibeAlarm: SpecValue,
        lowPower: SpecValue,
        videoAnalyseAlarm: SpecValue,
        faceDefenseAlarm: SpecValue,
        rfidBrokenAlarm: SpecValue,
        heartRateAlarm: SpecValue,
        rfidButtonAlarm: SpecValue,
        smokeAlarm: SpecValue,
        fireAlarm: SpecValue,
        gathering: SpecValue,
        dutySleep: SpecValue,
        fight: SpecValue,
        leftDuty: SpecValue,
        crossLine: SpecValue
    }

    const DeviceAlarmCode: DeviceAlarmCodeStatic;

    interface DeviceControlCodeStatic {
        outarm: SpecValue,
        stayarm: SpecValue,
        disarm: SpecValue,
        connectRelay: SpecValue,
        disconnectRelay: SpecValue,
        bypass: SpecValue,
        cancelBypass: SpecValue,
        queryArm: SpecValue,
        callSlave: SpecValue,
        listenSlave: SpecValue,
        hangupSlave: SpecValue,
        startBroadcast: SpecValue,
        stopBroadcast: SpecValue,
        setContent: SpecValue,
        resumeContent: SpecValue,
        switchDecoderChannel: SpecValue,
        switchMatrixChannel: SpecValue,
        matrixPTZ: SpecValue,
        matrixPreset: SpecValue,
        setTvwallLayout: SpecValue,
        openDoor: SpecValue,
        closeDoor: SpecValue
    }

    const DeviceControlCode: DeviceControlCodeStatic;

    interface DeviceControlParam {
        ControlCode: number;
        InterfaceCode: number;
        Receivers?: Array<string>;
        Sender?: string;
        Parameter?: Array<string>;
    }

    interface DeviceDataTypeStatic {
        device: SpecValue,
        gb: SpecValue
    }

    const DeviceDataType: DeviceDataTypeStatic;

    interface DeviceEventCodeStatic {
        unknow: SpecValue,
        doorOpened: SpecValue,
        doorClosed: SpecValue,
        flashOpen: SpecValue,
        buttonOpen: SpecValue,
        listenSlave: SpecValue,
        slaveCallin: SpecValue,
        masterCallin: SpecValue,
        dataUpdate: SpecValue,
        faceCapture: SpecValue,
        carPlateIdentify: SpecValue
    }

    const DeviceEventCode: DeviceEventCodeStatic;

    interface DeviceEventData {
        ResourceCode: number;
        Address: string;
        EventType: number;
        EventLevel: number;
        EventCode?: number;
        AlarmCode?: number;
        EventTime: Date;
        EventDescription?: string;
        EventExtra?: string
    }

    interface DeviceEventLevelStatic {
        level0: SpecValue;
        level1: SpecValue;
        level2: SpecValue;
        level3: SpecValue;
        level4: SpecValue;
        level5: SpecValue;
        level6: SpecValue;
        level7: SpecValue;
        level8: SpecValue;
        level9: SpecValue;
    }

    const DeviceEventLevel: DeviceEventLevelStatic;

    interface DeviceEventTypeStatic {
        normalEvent: SpecValue;
        alarmEvent: SpecValue;
        statusEvent: SpecValue;
    }

    const DeviceEventType: DeviceEventTypeStatic;

    interface DeviceFaultCodeStatic {
        videoLost: SpecValue;
        audioLost: SpecValue;
        diskFull: SpecValue;
        diskFault: SpecValue;
        offline: SpecValue;
        disturb: SpecValue;
        powerAbnormal: SpecValue;
        videoQuality: SpecValue;
    }

    const DeviceFaultCode: DeviceFaultCodeStatic;

    interface DeviceInterfaceCodeStatic {
        none: SpecValue;
        hikvisionGeneralDevice: SpecValue;
        dahuaGeneralDevice: SpecValue;
        dahuaDSSVideoPlatform: SpecValue;
        dahua7016VideoPlatform: SpecValue;
        netposaVideoPlatform: SpecValue;
        univiewVideoPlatform: SpecValue;
        boshiMTWAlarmSoftware: SpecValue;
        boshiIP7400AlarmHost: SpecValue;
        honeywellIP2000AlarmHost: SpecValue;
        honeywellIPMAlarmHost: SpecValue;
        lonbonAnalogCallHost: SpecValue;
        lonbonDigitalCallHost: SpecValue;
        jiaodajinggongDoorSoftware: SpecValue;
        maiteanDoorSoftware: SpecValue;
        haoweiAlarmSoftware: SpecValue;
        porisOPCService: SpecValue;
        saibangteDigitalCallHost: SpecValue;
        haoweiDvrEncoderHost: SpecValue;
        haoweiNvrEncoderHost: SpecValue;
        keykingOPCSoftware: SpecValue;
        niubeierDoorSoftware: SpecValue;
        pikeDoorController: SpecValue;
        weigenDoorController: SpecValue;
        yitongDoorController: SpecValue;
        yangbangLedController: SpecValue;
        yikuoLedController: SpecValue;
        linxinLedControllerV3: SpecValue;
        linxinLedControllerV5: SpecValue;
        shizhanLedController: SpecValue;
        xiangyunLedController: SpecValue;
        kuaiyuLedController: SpecValue;
        bocomBVGController: SpecValue;
        hikvisionB20Platform: SpecValue;
        haoweiDecoderHost: SpecValue;
        infinovaMatrixController: SpecValue;
        intlMatrixController: SpecValue;
        jinsanliMatrixSoftware: SpecValue;
        putaikeAlarmHost: SpecValue;
        dahuaTvwallController: SpecValue;
        skyworthTvwallController: SpecValue;
        tclTvwallController: SpecValue;
        huiguUpsHost: SpecValue;
        shanteC6UpsHost: SpecValue;
        shante3c3EXUpsHost: SpecValue;
        yishiteUpsHost: SpecValue;
        hongshiVideoAnalysePlatform: SpecValue;
        hongshenVideoAnalyseDevice: SpecValue;
        lingxinLedControllerV5_2014: SpecValue;
        hikvision7200Platform: SpecValue;
        hikvision8300Platform: SpecValue;
        hikvision8700Platform: SpecValue;
        kedaPlatform: SpecValue;
        guangtuoDevice: SpecValue;
        meizanmeiDevice: SpecValue;
        yingfeituoDevice: SpecValue;
        zhongxinliweiDevice: SpecValue;
        yushiNvrEncoderHost: SpecValue;
        networkCheck: SpecValue;
        kuaiyuSoundv2SERIAL: SpecValue;
        tclTvwallSERIAL: SpecValue;
        huiguUpsStatusUDP: SpecValue;
        yishiteUpsModbusSERIAL: SpecValue;
        kuaiyuDigitalCallSDK: SpecValue;
        aosongEnvMonitorTcpModbus: SpecValue;
        miaoguanEnvMonitorTcpModbus: SpecValue;
        hikvisionDecoderSDK: SpecValue;
        dahuaDecoderSDK: SpecValue;
        boshiAlarmSERIAL: SpecValue;
        yituFaceRecognitionMTXREST: SpecValue;
        xilingVideoAnalyseREST: SpecValue;
        sihuaRFIDWEBSOCKET: SpecValue;
        unicomIOTREST: SpecValue;
        dahuaVideoAnalyseSDK: SpecValue;
        sihuaRFIDLocatingREST: SpecValue;
        juyingRelayTCP: SpecValue;
        wanguDoorUDP: SpecValue;
        shengkeAlarmPlatform: SpecValue;
        lingxinLedControllerV6: SpecValue;
        yituFaceRecognitionV18REST: SpecValue;
        renweiRFIDUDP: SpecValue;
    }

    const DeviceInterfaceCode: DeviceInterfaceCodeStatic;

    interface DeviceWorkingStatusStatic {
        normal: SpecValue;
        fault: SpecValue;
    }

    const DeviceWorkingStatus: DeviceWorkingStatusStatic;

    interface DigitalCommand {
        CommandType?: number;
        Layout?: DigitalLayout;
        Marquee?: DigitalMarquee;
        Speech?: string;
        Value?: string;
        ElapseTime?: number;
    }

    interface DigitalContentTypeStatic {
        realVideo: SpecValue;
        videoFile: SpecValue;
        audioFile: SpecValue;
        webPage: SpecValue;
        imageFile: SpecValue;
    }

    const DigitalContentType: DigitalContentTypeStatic;

    interface DigitalControlCodeStatic {
        normalPlay: SpecValue;
        stickPlay: SpecValue;
        lockControl: SpecValue;
        unlockControl: SpecValue;
        reboot: SpecValue;
        marquee: SpecValue;
        speech: SpecValue;
        screenShot: SpecValue;
        volumn: SpecValue;
        ntpSync: SpecValue
    }

    const DigitalControlCode: DigitalControlCodeStatic;

    interface DigitalLayout {
        Width?: number;
        Height?: number;
        FullScreen?: boolean;
        BackgroundImage?: string;
        BackgroundAudio?: string;
        Areas?: Array<DigitalLayoutArea>;
    }

    interface DigitalLayoutArea {
        ContentType?: number;
        X?: number;
        Y?: number;
        Width?: number;
        Height?: number;
        Urls?: Array<string>;
        SwitchTime?: number
    }

    interface DigitalMarquee {
        FontSize?: number;
        FontColor?: string;
        IsBold?: boolean;
        IsItalic?: boolean;
        IsUnderline?: boolean;
        Text?: string;
    }

    interface DigitalTerminalTypeStatic {
        infopubTerminal: SpecValue;
        iptvTerminal: SpecValue;
        ledScreen: SpecValue;
    }

    const DigitalTerminalType: DigitalTerminalTypeStatic;


    interface ProductRegister {
        startRegister();
        stopRegister();
    }

    interface ServiceRegister {
        addService(service: ProtocolService);
        getServices(): Array<ProtocolService>;
        startRegister();
        stopRegister();
    }

    interface ServiceDiscovery {
        getServices(): Promise<Array<ProtocolService>>;
        getService(serviceType: number): Promise<ProtocolService>;
    }

    interface DiskInfo {
        TotalDiskSize?: number;
        UsedDiskSize?: number;
        FreeDiskSize?: number;
        DiskPercent?: string;
    }

    interface DoorExtra {
        Name?: string;
        Card?: string;
        ImageAddress?: string;
    }

    interface EnvMonitorExtra {
        Temperature?: number;
        Humidity?: number;
    }

    interface FaceRecognition {
        CameraAddress?: string;
        FaceImagePath?: string;
        SceneImagePath?: string;
        FaceX?: number;
        FaceY?: number;
        FaceWidth?: number;
        FaceHeight?: number;
        IsHit?: boolean;
        HitImagePath?: string;
        Similarity?: number;
        PersonId?: string;
        PersonName?: string;
    }

    interface FaceRecognitionExtra {
        SceneImagePath?: string;
        SceneImage?: string;
        FaceImagePath?: string;
        FaceImage?: string;
        PersonId?: string;
        PersonName?: string;
        Similarity?: number;
    }

    interface FaceRollCallFeedback {
        PrisonerJsh?: string;
        PrisonerSnbh?: string;
        PrisonerName?: string;
        PrisonerFacePath?: string;
        RollCallStatus?: number;
        RollCallResult?: number;
    }

    interface FaceRollCallStatusStatic {
        notStarted: SpecValue;
        started: SpecValue;
        finished: SpecValue;
    }

    const FaceRollCallStatus: FaceRollCallStatusStatic;

    interface FingerPrint {
        CharacterCode?: string;
    }

    interface HospitalCall {
        CallType?: number;
        CallContent?: string;
    }

    interface HospitalCallTypeStatic {
        clinicLevel1: SpecValue;
        clinicLevel2: SpecValue;
        blood: SpecValue;
        pharmacy: SpecValue;
        ris: SpecValue;
        clearArea: SpecValue;
        clearAll: SpecValue;
    }

    const HospitalCallType: HospitalCallTypeStatic;

    interface InitParam {
        RemoteIPAddress?: string;
        RemotePort?: number;
        LocalPort?: number;
        UserName?: string;
        UserPwd?: string;
        RemoteServiceAddress?: string;
        ComPort?: string;
        BaudRate?: number;
        DataBits?: number;
        StopBits?: number;
        Parity?: number;
        ConnectionString?: string;
        Extra?: string;
    }

    interface MaintainRepairResultStatic {
        nonPicked: SpecValue;
        dispatched: SpecValue;
        working: SpecValue;
        transfer: SpecValue;
        needConfirm: SpecValue;
        done: SpecValue;
        misReport: SpecValue;
    }

    const MaintainRepairResult: MaintainRepairResultStatic;

    interface MaintainReportTypeStatic {
        manuReport: SpecValue;
        autoReport: SpecValue;
    }

    const MaintainReportType: MaintainReportTypeStatic;

    interface MaintainRoleTypeStatic {
        owner: SpecValue;
        manager: SpecValue;
        maintainer: SpecValue;
        supervisor: SpecValue;
    }

    const MaintainRoleType: MaintainRoleTypeStatic;


    interface ManufacturerCodeStatic {
        none: SpecValue;
        saints: SpecValue;
        hikvision: SpecValue;
        dahua: SpecValue;
        netposa: SpecValue;
        uniview: SpecValue;
        boshi: SpecValue;
        honeywell: SpecValue;
        lonbon: SpecValue;
        jiaodajinggong: SpecValue;
        jinsanli: SpecValue;
        howell: SpecValue;
        maitean: SpecValue;
        poris: SpecValue;
        ptk: SpecValue;
        keyking: SpecValue;
        weigen: SpecValue;
        yangbang: SpecValue;
        yikuo: SpecValue;
        lingxin: SpecValue;
        shizhan: SpecValue;
        xiangyun: SpecValue;
        infinova: SpecValue;
        skyworth: SpecValue;
        tcl: SpecValue;
        shante: SpecValue;
        yishite: SpecValue;
        hongshi: SpecValue;
        hongshen: SpecValue;
        meizanmei: SpecValue;
        saibangte: SpecValue;
        niubeier: SpecValue;
        pike: SpecValue;
        yitong: SpecValue;
        kuaiyu: SpecValue;
        bokang: SpecValue;
        intl: SpecValue;
        jiaodahuigu: SpecValue;
        guangtuo: SpecValue;
        aosong: SpecValue;
        miaoguan: SpecValue;
        dashi: SpecValue;
        xiling: SpecValue;
        yitu: SpecValue;
        sihua: SpecValue;
        unicom: SpecValue;
        juying: SpecValue;
        shengke: SpecValue;
        wangu: SpecValue;
        renwei: SpecValue;
    }

    const ManufacturerCode: ManufacturerCodeStatic;

    interface MemoryInfo {
        TotalMemory?: number;
        UsedMemory?: number;
        FreeMemory?: number;
        MemoryPercent?: string;
    }

    interface NicConfig {
        MacAddress?: string;
        IPAddress?: string;
        NetMask?: string;
        Gateway?: string;
        Name?: string;
    }

    interface PrescriptionTypeStatic {
        st: SpecValue;
        qs: SpecValue;
        bid: SpecValue;
        tid: SpecValue;
        qid: SpecValue;
        qn: SpecValue;
        qod: SpecValue;
    }

    const PrescriptionType: PrescriptionTypeStatic;

    interface PrisonBusinessTypeStatic {
        refresh: SpecValue;
        cellTerminalNotify: SpecValue;
        meetingArraignFeedback: SpecValue;
        startFaceRollCall: SpecValue;
        faceRollCallFeedback: SpecValue;
        faceRollCallCellEnd: SpecValue;
        stopFaceRollCall: SpecValue;
        answerAlarm: SpecValue;
        dealingAlarm: SpecValue;
        dealedAlarm: SpecValue;
        meetingBatchBegin: SpecValue;
        meetingBatchEnd: SpecValue;
        meetingBringOut: SpecValue;
        meetingBringIn: SpecValue;
    }

    const PrisonBusinessType: PrisonBusinessTypeStatic;

    interface PrisonerActivityStatic {
        stay: SpecValue;
        arraignment: SpecValue;
        lawMeeting: SpecValue;
        familyMeeting: SpecValue;
        identity: SpecValue;
        outHospitalize: SpecValue;
        outHospitalized: SpecValue;
        court: SpecValue;
        singleCell: SpecValue;
        encaged: SpecValue;
        other: SpecValue;
    }

    const PrisonerActivity: PrisonerActivityStatic;

    interface PrisonerDianosticMethodStatic {
        medicalTreat: SpecValue;
        nonMedicalTreat: SpecValue;
        goHospital: SpecValue;
    }

    const PrisonDiagnosticMethod: PrisonerDianosticMethodStatic;

    interface PrisonerDispatchRequestStatusStatic {
        request: SpecValue;
        deny: SpecValue;
        dispatching: SpecValue;
        done: SpecValue;
    }

    const PrisonerDispatchRequestStatus: PrisonerDispatchRequestStatusStatic;

    interface PrisonerDoseResultStatic {
        accepted: SpecValue;
        refused: SpecValue;
    }

    const PrisonerDoseResult: PrisonerDoseResultStatic;

    interface PrisonerDutySubTypeStatic {
        AM1130PM1315: SpecValue;
        PM2200AM0000: SpecValue;
        AM0000AM0200: SpecValue;
        AM0200AM0400: SpecValue;
        AM0400AM0600: SpecValue;
    }

    const PrisonerDutySubType: PrisonerDutySubTypeStatic;

    interface PrisonerDutyTypeStatic {
        noon: SpecValue;
        night: SpecValue;
        clean: SpecValue;
    }

    const PrisonerDutyType: PrisonerDutySubTypeStatic;

    interface PirsonerHealthStatusStatic {
        health: SpecValue;
        medicineCare: SpecValue;
        importantCare: SpecValue;
    }

    const PrisonerHealthStatus: PirsonerHealthStatusStatic;

    interface PrisonerRollCallResultStatic {
        normal: SpecValue;
        abnormal: SpecValue;
    }

    const PrisonerRollCallResult: PrisonerRollCallResultStatic;

    interface PrisonerRollCallTypeStatic {
        terminalRollCall: SpecValue;
        faceRollCall: SpecValue;
        voiceRollCall: SpecValue;
    }

    const PrisonerRollCallTypeStatic: PrisonerRollCallTypeStatic;

    interface PrisonMeetingRegisterTypeStatic {
        live: SpecValue;
        appointment: SpecValue;
    }

    const PrisonMeetingRegisterType: PrisonMeetingRegisterTypeStatic;

    interface PrisonMeetingRoomStatusStatic {
        unavailable: SpecValue;
        free: SpecValue;
        using: SpecValue
    }

    const PrisonMeetingRoomStatus: PrisonMeetingRoomStatusStatic;

    interface PrisonMeetingRoomTypeStatic {
        general: SpecValue;
        arraignment: SpecValue;
        meeting: SpecValue;
    }

    const PrisonMeetingRoomType: PrisonMeetingRoomTypeStatic;

    interface PrisonMeetingStatusStatic {
        waiting: SpecValue;
        ongoing: SpecValue;
        finished: SpecValue;
        canceled: SpecValue;
        bringOut: SpecValue;
        bringIn: SpecValue;
        fingerBegin:SpecValue;
        fingerEnd:SpecValue;
    }

    const PrisonMeetingStatus: PrisonMeetingStatusStatic;

    interface PrisonMeetingTypeStatic {
        general: SpecValue;
        arraignment: SpecValue;
        lawyerMeeting: SpecValue;
        familyMeeting: SpecValue;
        signArraignment: SpecValue;
    }

    const PrisonMeetingType: PrisonMeetingTypeStatic;

    interface PrisonMeetingUserTypeStatic {
        police: SpecValue;
        lawyer: SpecValue;
        family: SpecValue;
        other: SpecValue;
    }

    const PrisonMeetingUserType: PrisonMeetingUserTypeStatic;

    interface PrisonMessage {
        BusinessType: number;
        Detail?: string;
    }

    interface PrisonTerminalTypeStatic {
        outsideTerminal: SpecValue;
        insideTerminal: SpecValue;
        arraignTerminal: SpecValue;
        frontSideMeetingTerminal: SpecValue;
        backSideMeetingTerminal: SpecValue;
    }

    const PrisonTerminalType: PrisonTerminalTypeStatic;

    interface PrisonTreeNodeTypeStatic {
        none: SpecValue;
        prisonDistrict: SpecValue;
        prisonCell: SpecValue;
        prisonBed: SpecValue;
        prisoner: SpecValue;
    }

    const PrisonTreeNodeType: PrisonTreeNodeTypeStatic;

    interface PrisonUserTypeStatic {
        admin: SpecValue;
        police: SpecValue;
        doctor: SpecValue;
        arraignPolice: SpecValue;
        receptionPolice: SpecValue;
    }

    const PrisonUserType: PrisonUserTypeStatic;

    interface ProductIdsStatic {
        commandcenterID: string;
        videoManageID: string;
        discoveryServiceID: string;
        detectorDllID: string;
        detectorProtocolID: string;
        buildAutomationID: string;
        maintainanceID: string;
        digitalContentManageID: string;
        hospitalDigitalCenterID: string;
        schoolSecurityPlatformID: string;
        videoDiagnosticStoragePlatformID: string;
        prisonServicePlatformID: string;
        streamManagePlatformID: string;
        streamTransmissionServiceID: string;
        streamStorageServiceID: string;
        generalBrowserID: string;
        infopublishTemrinalID: string;
        iptvTerminalID: string;
        transmitMessageServiceID: string;
        centralUpdateServiceID: string;
        krpanoPlatformID: string;
        humanTrafficPlatformID: string;
        videoStorageServiceID: string;
        videoDiagnosticServiceID: string;
        generalVideoPlayerID: string;
        detectorManageID: string;
    }

    const ProductIds: ProductIdsStatic;

    interface ProductInfo {
        ProductName?: string;
        ProductId?: string;
        DisplayName?: string;
        ProductType?: number;
        VersionNumber?: string;
        VersionCode?: number
        InstallPath?: string;
        OS?: number;
    }

    interface ProductOSStatic {
        windows: number;
        linux_debian: number;
        android: number;
    }

    const ProductOS: ProductOSStatic;

    interface ProductTypeStatic {
        client: number;
        server: number;
        systemService: number;
    }

    const ProductType: ProductTypeStatic;

    interface ProjectStatusStatic {
        preparing: SpecValue;
        constructing: SpecValue;
        testing: SpecValue;
        online: SpecValue;
    }

    const ProjectStatus: ProjectStatusStatic;

    interface ProtocolService {
        ServiceName?: string;
        ServiceAddress?: string;
        ServicePort?: number;
        UserName?: string;
        UserPwd?: string;
        ServiceType?: number
    }

    interface ProtocolServiceTypeStatic {
        deviceDataService: number;
        deviceEventService: number;
        deviceStatusService: number;
        maintainService: number;
        prisonerDataService: number;
        ssoService: number;
        digitalService: number;
        centralUpdateService: number;
        transmitMessageService: number;
        serialGatewayService: number;
        sendMessageService: number;
        videoService: number;
        schoolService: number;
        prisonService: number;

        webMapService: number;
        webFeatureService: number;
        webTiledMapService: number;
        arcgisDynamicMapService: number;
        arcgisTiledMapService: number;
        arcgisGeometryService: number;
    }

    const ProtocolServiceType: ProtocolServiceTypeStatic;

    interface ResourceCodeStatic {
        none: SpecValue;
        encoderChannel: SpecValue;
        doorPoint: SpecValue;
        manuAlarm: SpecValue;
        callTerminal: SpecValue;
        soundAlarm: SpecValue;
        irAlarm: SpecValue;
        powergrid: SpecValue;
        envMonitor: SpecValue;
        smokeMonitor: SpecValue;
        airMonitor: SpecValue;
        rfidTag: SpecValue;
        relay: SpecValue;
        decoderChannel: SpecValue;
        matrixChannel: SpecValue;
        screenOutput: SpecValue;
        videoAnalyseChannel: SpecValue;
        encoder: SpecValue;
        decoder: SpecValue;
        matrixController: SpecValue;
        tvwallController: SpecValue;
        alarmHost: SpecValue;
        doorController: SpecValue;
        callHost: SpecValue;
        listenerHost: SpecValue;
        powergridHost: SpecValue;
        ledController: SpecValue;
        envmonitorHost: SpecValue;
        upsHost: SpecValue;
        videoAnalyseHost: SpecValue;
        detector: SpecValue;
        relayHost: SpecValue;
        pc: SpecValue;
        server: SpecValue;
        notebook: SpecValue;
        mobilephone: SpecValue;
        pad: SpecValue;
        switch: SpecValue;
        router: SpecValue;
        hub: SpecValue;
        infopubTerminal: SpecValue;
        iptvTerminal: SpecValue;
        fireHydrant: SpecValue;
        fireHydrantBox: SpecValue;
        heater: SpecValue;
        acBox: SpecValue;
        trashBox: SpecValue;
        emergencyLight: SpecValue;
        jackBox: SpecValue;
        centerAC: SpecValue;
        lamp: SpecValue;
        ledLight: SpecValue;
        roadSign: SpecValue;
        cellOutTerminal: SpecValue;
        cellInTerminal: SpecValue;
        electricityCover: SpecValue;
        wasteCover: SpecValue;
        rainCover: SpecValue;
        realSource: SpecValue;
        videoFileSource: SpecValue;
        audioFileSource: SpecValue;
        webSource: SpecValue;
        imageSource: SpecValue;
    }

    const ResourceCode: ResourceCodeStatic;


    type SortDir = 'ASC' | 'DESC';

    interface RestQuery {
        Start?: number;
        Limit?: number;
        Sort?: string;
        Direction?: SortDir;
        Search?: string;
    }

    interface RestQueryConstStatic {
        start?: string;
        limit?: string;
        sort?: string;
        direction?: string;
        search?: string;
    }

    const RestQueryConst: RestQueryConstStatic;

    interface RestResponse {
        result?: boolean;
        error_msg?: string;
        data?: any;
        total_count?: number;
    }

    interface RestResponseSingle<T> {
        result?: boolean;
        error_msg?: string;
        data?: T;
        total_count?: number;
    }

    interface RestResponseMulti<T> {
        result?: boolean;
        error_msg?: string;
        data?: T[];
        total_count?: number;
    }

    function NewBoolResponse<T>(b: boolean, errmsg: string): RestResponse;
    function NewDataResponse<T>(d: any, cnt: number): RestResponse;
    function NewBoolResponse<T>(b: boolean, errmsg: string): RestResponseSingle<T>;
    function NewDataResponse<T>(d: T, cnt: number): RestResponseSingle<T>;
    function NewBoolResponse<T>(b: boolean, errmsg: string): RestResponseMulti<T>;
    function NewDataResponse<T>(d: T[], cnt: number): RestResponseMulti<T>;

    interface RFIDTagExtra {
        TagId?: string;
        PersonId?: string;
        PersonName?: string;
        BatteryVoltage?: number;
        HeartRate?: number;
    }


    interface SchoolCategoryStatic {
        youErYuan: SpecValue;
        xiaoXue: SpecValue;
        nongMinGongZiNvXiaoXue: SpecValue;
        chuZhong: SpecValue;
        gaoZhong: SpecValue;
        yiGuanZhi: SpecValue;
        wanZhong: SpecValue;
        zhiXiao: SpecValue;
        teShuXueXiao: SpecValue;
        tuoErSuo: SpecValue;
    }

    const SchoolCategory: SchoolCategoryStatic;

    interface SchoolCheckPaperTypeStatic {
        campusAround: SpecValue;
        campusSecurity: SpecValue;
        educationBuilding: SpecValue;
        chemicalExperiment: SpecValue;
        sportArea: SpecValue;
        foodSanitation: SpecValue;
        canteen: SpecValue;
        dormitory: SpecValue;
        fireProtection: SpecValue;
        vehicle: SpecValue;
        securityManage: SpecValue;
    }

    const SchoolCheckPaperType: SchoolCheckPaperTypeStatic;

    interface SchoolCheckPlanStatusStatic {
        planning: SpecValue;
        published: SpecValue;
        obsolete: SpecValue;
    }

    const SchoolCheckPlanStatus: SchoolCheckPlanStatusStatic;

    interface SchoolCheckQuestionSourceStatic {
        cityCouncil: SpecValue;
        districtCouncil: SpecValue;
    }

    const SchoolCheckQuestionSource: SchoolCheckQuestionSourceStatic;

    interface SchoolCheckQuestionStatusStatic {
        editable: SpecValue;
        published: SpecValue;
        obsolete: SpecValue;
    }

    const SchoolCheckQuestionStatus: SchoolCheckQuestionStatusStatic;

    interface SchoolCheckQuestionTypeStatic {
        judge: SpecValue;
        count: SpecValue;
    }

    const SchoolCheckQuestionType: SchoolCheckQuestionTypeStatic;



    interface SchoolCheckRedressStatusStatic {
        no: SpecValue;
        wait: SpecValue;
        review: SpecValue;
        done: SpecValue;
    }

    const SchoolCheckRedressStatus: SchoolCheckRedressStatusStatic;

    interface SchoolCheckResultStatic {
        none: SpecValue;
        pass: SpecValue;
        fail: SpecValue;
    }

    const SchoolCheckResult: SchoolCheckResultStatic;

    interface SchoolCheckTaskStatusStatic {
        notStarted: SpecValue;
        onGoing: SpecValue;
        finish: SpecValue;
    }

    const SchoolCheckTaskStatus: SchoolCheckTaskStatusStatic;

    interface SchoolCheckTypeStatic {
        centerCheck: SpecValue;
        selfCheck: SpecValue;
        specCheck: SpecValue;
    }

    const SchoolCheckType: SchoolCheckTypeStatic;

    interface SchoolChemicalTypeStatic {
        poison: SpecValue;
        makeExplosive: SpecValue;
        makePoison: SpecValue;
        others: SpecValue;
    }

    const SchoolChemicalType: SchoolChemicalTypeStatic;

    interface SchoolEmergencyStatic {
        alarm110: SpecValue;
    }

    const SchoolEmergency: SchoolEmergencyStatic;

    interface SchoolMapTypeStatic {
        image: SpecValue;
        git: SpecValue;
        gitData: SpecValue;
    }

    const SchoolMapType: SchoolMapTypeStatic;

    interface SchoolMessageTypeStatic {
        incipientFault: SpecValue;
        notice: SpecValue;
        mail: SpecValue;
        task: SpecValue;
        eventReport: SpecValue;
    }

    const SchoolMessageType: SchoolMessageTypeStatic;

    interface SchoolMessageWrapperTypeStatic {
        checkTask: SpecValue;
        publishRedressTask: SpecValue;
        submitRedressTask: SpecValue;
        reviewRedressTask: SpecValue;
        rejectRedressTask: SpecValue;
        finishRedressTask: SpecValue;
        instantReportTask: SpecValue;
    }

    const SchoolMessageWrapperType: SchoolMessageWrapperTypeStatic;

    interface SchoolNatureStatic {
        publicSchool: SpecValue;
        privateSchool: SpecValue;
    }

    const SchoolNature: SchoolNatureStatic;

    interface SchoolNoticeTypeStatic {
        centerNotification: SpecValue;
        conferenceNotice: SpecValue;
        safetyActivityNotice: SpecValue;
        urgeReportTable: SpecValue;
        urgeActivityReport: SpecValue;
        urgeDutyTable: SpecValue;
        urgeSafetyReport: SpecValue;
        urgeLicenseExpire: SpecValue;
        finishRedressTask: SpecValue;
        instantReportFeedback: SpecValue;
        instantReportFinish: SpecValue;
    }

    const SchoolNoticeType: SchoolNoticeTypeStatic;

    interface SchoolReportActivityCategoryStatic {
        securityActivity: SpecValue;
    }

    const SchoolReportActivityCategory: SchoolReportActivityCategoryStatic;

    interface SchoolReportActivityTypeStatic {
        force: SpecValue;
        freeWill: SpecValue;
    }

    const SchoolReportActivityType: SchoolReportActivityTypeStatic;

    interface SchoolUserTypeStatic {
        schoolNormal: SpecValue;
        centerNormal: SpecValue;
        schoolSecurity: SpecValue;
        centerSecurity: SpecValue;
    }

    const SchoolUserType: SchoolUserTypeStatic;

    interface SchoolWaterUsageStatic {
        canteen: SpecValue;
        life: SpecValue;
        teacher: SpecValue;
        student: SpecValue;
    }

    const SchoolWaterUsage: SchoolWaterUsageStatic;

    interface SchoolLicenseTypeStatic {
        cateringService: SpecValue,
        canteenContract: SpecValue,
        canteenDeliveryContract: SpecValue,
        boxMealProduct: SpecValue,
        canteenBusiness: SpecValue,
        deliveryBusiness: SpecValue,
        launchBusiness: SpecValue,
        cateringSecurityTrainA: SpecValue,
        cateringSecurityTrainB: SpecValue,
        cateringSecurityTrainC: SpecValue,
        canteenEmployeeHealth: SpecValue,
        specialDeviceOperation: SpecValue
    }

    const SchoolLicenseType: SchoolLicenseTypeStatic;

    interface SchoolDocumentTypeStatic {
        law: SpecValue,
        regulation: SpecValue,
        presolution: SpecValue
    }

    const SchoolDocumentType: SchoolDocumentTypeStatic;

    interface SchoolCitizenReportBizTypeStatic {
        consult: SpecValue,
        complaint: SpecValue,
        help: SpecValue,
        advice: SpecValue
    }

    const SchoolCitizenReportBizType: SchoolCitizenReportBizTypeStatic;

    interface SchoolCitizenReportDealResultStatic {
        processing: SpecValue,
        reject: SpecValue,
        onTime: SpecValue,
        overTime: SpecValue
    }

    const SchoolCitizenReportDealResult: SchoolCitizenReportDealResultStatic;

    interface SchoolCitizenReportSourceStatic {
        source12345: SpecValue,
        source962347: SpecValue,
        other: SpecValue
    }

    const SchoolCitizenReportSource: SchoolCitizenReportSourceStatic;

    interface SchoolCitizenReportTransferTypeStatic {
        administrationPlatform: SpecValue,
        wechat: SpecValue,
        email: SpecValue,
        fax: SpecValue
    }

    const SchoolCitizenReportTransferType: SchoolCitizenReportTransferTypeStatic

    interface SchoolCitizenReportUrgentLevelStatic {
        normal: SpecValue,
        emergency: SpecValue
    }

    const SchoolCitizenReportUrgentLevel: SchoolCitizenReportUrgentLevelStatic;

    interface SpecificationSettingsStatic {
        discoveryHttpPort: number;
        discoveryApiPrefix: string;
        discveryLocalHttpAddress: string;
        discoveryApiService: string;
        discoveryApiProduct: string;
        registerInterval: number;
        proxyHttpPort: number;
        proxyHttpAddress: string;
        proxyApiService: string
    }

    const SpecificationSettings: SpecificationSettingsStatic;

    interface TransmitMesage {
        MessageId?: string;
        MessageType?: number;
        MessageContent?: string;
        MessageTime?: Date;
        MessageReceiver?: Array<string>
    }

    interface TranmitMessageClient {
        Product?: ProductInfo;
        IPAddress?: Array<string>;
        MacAddress?: Array<string>;
    }

    interface TransmitMessageSpcStatic {
        helloEvent: string;
        joinEvent: string;
        leaveEvent: string;
        messageUpEvent: string;
        messageDownEvent: string;
        deviceEventRoom: string;
        deviceStatusRoom: string;
        deviceControlRoom: string;
        digitalControlRoom: string;
        maintainRoom: string;
        hospitalRoom: string;
        prisonRoom: string;
        bioIdentifyRoom: string;
        saintsNameSpace: string;
        thirdpartyNameSpace: string;
    }

    const TransmitMessageSpec: TransmitMessageSpcStatic;

    interface TransmitMessgeTypeStatic {
        systemMessage: SpecValue;
        update: SpecValue;
        deviceEvent: SpecValue;
        deviceStatus: SpecValue;
        deviceControl: SpecValue;
        digitalControl: SpecValue;
        maintain: SpecValue;
        hospital: SpecValue;
        prison: SpecValue;
        bioIdentify: SpecValue;
    }

    const TransmitMessgeType: TransmitMessgeTypeStatic;

    interface UpdateDetail {
        ProductId?: string;
        OS?: number;
        OldVersion?: number;
        NewVersion?: number;
        ShouldUpdate?: boolean;
        UpdateAddress?: string;
    }

    interface UpsExtra {
        Volter?: number;
        Electricity?: number;
        Battery?: number;
        BackupTime?: number;
        Temperature?: number;
    }

    function post(path: string, data: any): Promise<any>;
    function postBasicAuth(path: string, data: any, username: string, userpwd: string): Promise<any>;
    function put(path: string, data: any): Promise<any>;
    function putBasicAuth(path: string, data: any, username: string, userpwd: string);
    function get(path: string, data: any): Promise<any>;
    function getBasicAuth(path: string, data: any, username: string, userpwd: string);

    interface VideoAnalyseExtra {
        AnalyseType?: number;
        AnalyseContent?: string;
    }

    interface VideoAnalyseTypeStatic {
        behavior: SpecValue;
        faceRecognition: SpecValue;
        carPlateRecognition: SpecValue;
    }

    const VideoAnalyseType: VideoAnalyseTypeStatic;

    interface VideoDiagnosticResultStatic {
        unknow: SpecValue;
        normal: SpecValue;
        offline: SpecValue;
        videolost: SpecValue;
        bright: SpecValue;
        color: SpecValue;
        contract: SpecValue;
        frozen: SpecValue;
        blur: SpecValue;
        noise: SpecValue;
        wave: SpecValue;
        roll: SpecValue;
    }

    const VideoDiagnosticResult: VideoDiagnosticResultStatic;

    interface VideoRecordSourceStatic {
        schoolPlatform: SpecValue;
    }

    const VideoRecordSource: VideoRecordSourceStatic;

    interface VideoRecordStatusStatic {
        idle: SpecValue;
        waiting: SpecValue;
        running: SpecValue;
        failure: SpecValue;
        finish: SpecValue;
    }

    const VideoRecordStatus: VideoRecordStatusStatic;

    interface VideoStorageTypeStatic {
        plan: SpecValue;
        event: SpecValue;
        custom: SpecValue;
    }

    const VideoStorageType: VideoStorageTypeStatic;
}

export = spec;