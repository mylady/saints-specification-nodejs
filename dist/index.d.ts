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


    type SortDir = 'ASC' | 'DESC';

    interface RestQuery {
        Start?: number;
        Limit?: number;
        Sort?: string;
        Direction?: SortDir;
        Search?: string;
    }

    interface RestQueryConstStatic {
        start: string;
        limit: string;
        sort: string;
        direction: string;
        search: string;
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

    interface SchoolWaterSourceStatic {
        directWater: SpecValue;
        directWaterMachine: SpecValue;
        cistern: SpecValue;
        waterBox: SpecValue;
        heatPreserved: SpecValue;
        barrel: SpecValue;
    }

    const SchoolWaterSource: SchoolWaterSourceStatic;
}

export = spec;