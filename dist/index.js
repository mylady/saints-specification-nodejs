/**
 * Created by MyLady on 16/2/25.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _airMonitorExtra = require('./airMonitorExtra');

var _airMonitorExtra2 = _interopRequireDefault(_airMonitorExtra);

var _behaviorAnalyseExtra = require('./behaviorAnalyseExtra');

var _behaviorAnalyseExtra2 = _interopRequireDefault(_behaviorAnalyseExtra);

var _bioIdentifyMessage = require('./bioIdentifyMessage');

var _bioIdentifyMessage2 = _interopRequireDefault(_bioIdentifyMessage);

var _bioIdentifyType = require('./bioIdentifyType');

var _bioIdentifyType2 = _interopRequireDefault(_bioIdentifyType);

var _callExtra = require('./callExtra');

var _callExtra2 = _interopRequireDefault(_callExtra);

var _cameraType = require('./cameraType');

var _cameraType2 = _interopRequireDefault(_cameraType);

var _carPlateRecognitionExtra = require('./carPlateRecognitionExtra');

var _carPlateRecognitionExtra2 = _interopRequireDefault(_carPlateRecognitionExtra);

var _connectionMode = require('./connectionMode');

var _connectionMode2 = _interopRequireDefault(_connectionMode);

var _cpuInfo = require('./cpuInfo');

var _cpuInfo2 = _interopRequireDefault(_cpuInfo);

var _descripter = require('./descripter');

var _descripter2 = _interopRequireDefault(_descripter);

var _deviceAlarmCode = require('./deviceAlarmCode');

var _deviceAlarmCode2 = _interopRequireDefault(_deviceAlarmCode);

var _deviceFaultCode = require('./deviceFaultCode');

var _deviceFaultCode2 = _interopRequireDefault(_deviceFaultCode);

var _deviceControlCode = require('./deviceControlCode');

var _deviceControlCode2 = _interopRequireDefault(_deviceControlCode);

var _deviceControlParam = require('./deviceControlParam');

var _deviceControlParam2 = _interopRequireDefault(_deviceControlParam);

var _deviceDataType = require('./deviceDataType');

var _deviceDataType2 = _interopRequireDefault(_deviceDataType);

var _deviceEventCode = require('./deviceEventCode');

var _deviceEventCode2 = _interopRequireDefault(_deviceEventCode);

var _deviceEventData = require('./deviceEventData');

var _deviceEventData2 = _interopRequireDefault(_deviceEventData);

var _deviceEventLevel = require('./deviceEventLevel');

var _deviceEventLevel2 = _interopRequireDefault(_deviceEventLevel);

var _deviceEventType = require('./deviceEventType');

var _deviceEventType2 = _interopRequireDefault(_deviceEventType);

var _deviceInterfaceCode = require('./deviceInterfaceCode');

var _deviceInterfaceCode2 = _interopRequireDefault(_deviceInterfaceCode);

var _deviceWorkingStatus = require('./deviceWorkingStatus');

var _deviceWorkingStatus2 = _interopRequireDefault(_deviceWorkingStatus);

var _digitalCommand = require('./digitalCommand');

var _digitalCommand2 = _interopRequireDefault(_digitalCommand);

var _digitalContentType = require('./digitalContentType');

var _digitalContentType2 = _interopRequireDefault(_digitalContentType);

var _digitalControlCode = require('./digitalControlCode');

var _digitalControlCode2 = _interopRequireDefault(_digitalControlCode);

var _digitalLayout = require('./digitalLayout');

var _digitalLayout2 = _interopRequireDefault(_digitalLayout);

var _digitalLayoutArea = require('./digitalLayoutArea');

var _digitalLayoutArea2 = _interopRequireDefault(_digitalLayoutArea);

var _digitalMarquee = require('./digitalMarquee');

var _digitalMarquee2 = _interopRequireDefault(_digitalMarquee);

var _digitalTerminalType = require('./digitalTerminalType');

var _digitalTerminalType2 = _interopRequireDefault(_digitalTerminalType);

var _discovery = require('./discovery');

var _diskInfo = require('./diskInfo');

var _diskInfo2 = _interopRequireDefault(_diskInfo);

var _doorExtra = require('./doorExtra');

var _doorExtra2 = _interopRequireDefault(_doorExtra);

var _envMonitorExtra = require('./envMonitorExtra');

var _envMonitorExtra2 = _interopRequireDefault(_envMonitorExtra);

var _faceRecognition = require('./faceRecognition');

var _faceRecognition2 = _interopRequireDefault(_faceRecognition);

var _faceRecognitionExtra = require('./faceRecognitionExtra');

var _faceRecognitionExtra2 = _interopRequireDefault(_faceRecognitionExtra);

var _faceRollCallFeedback = require('./faceRollCallFeedback');

var _faceRollCallFeedback2 = _interopRequireDefault(_faceRollCallFeedback);

var _faceRollCallStatus = require('./faceRollCallStatus');

var _faceRollCallStatus2 = _interopRequireDefault(_faceRollCallStatus);

var _fingerPrint = require('./fingerPrint');

var _fingerPrint2 = _interopRequireDefault(_fingerPrint);

var _hospitalCall = require('./hospitalCall');

var _hospitalCall2 = _interopRequireDefault(_hospitalCall);

var _hospitalCallType = require('./hospitalCallType');

var _hospitalCallType2 = _interopRequireDefault(_hospitalCallType);

var _initParam = require('./initParam');

var _initParam2 = _interopRequireDefault(_initParam);

var _maintainRepairResult = require('./maintainRepairResult');

var _maintainRepairResult2 = _interopRequireDefault(_maintainRepairResult);

var _maintainReportType = require('./maintainReportType');

var _maintainReportType2 = _interopRequireDefault(_maintainReportType);

var _maintainRoleType = require('./maintainRoleType');

var _maintainRoleType2 = _interopRequireDefault(_maintainRoleType);

var _manufacturerCode = require('./manufacturerCode');

var _manufacturerCode2 = _interopRequireDefault(_manufacturerCode);

var _memoryInfo = require('./memoryInfo');

var _memoryInfo2 = _interopRequireDefault(_memoryInfo);

var _nicConfig = require('./nicConfig');

var _nicConfig2 = _interopRequireDefault(_nicConfig);

var _prescriptionType = require('./prescriptionType');

var _prescriptionType2 = _interopRequireDefault(_prescriptionType);

var _prisonBusinessType = require('./prisonBusinessType');

var _prisonBusinessType2 = _interopRequireDefault(_prisonBusinessType);

var _prisonerActivity = require('./prisonerActivity');

var _prisonerActivity2 = _interopRequireDefault(_prisonerActivity);

var _prisonerDiagnosticMethod = require('./prisonerDiagnosticMethod');

var _prisonerDiagnosticMethod2 = _interopRequireDefault(_prisonerDiagnosticMethod);

var _prisonerDispatchRequestStatus = require('./prisonerDispatchRequestStatus');

var _prisonerDispatchRequestStatus2 = _interopRequireDefault(_prisonerDispatchRequestStatus);

var _prisonerDoseResult = require('./prisonerDoseResult');

var _prisonerDoseResult2 = _interopRequireDefault(_prisonerDoseResult);

var _prisonerDutySubType = require('./prisonerDutySubType');

var _prisonerDutySubType2 = _interopRequireDefault(_prisonerDutySubType);

var _prisonerDutyType = require('./prisonerDutyType');

var _prisonerDutyType2 = _interopRequireDefault(_prisonerDutyType);

var _prisonerHealthStatus = require('./prisonerHealthStatus');

var _prisonerHealthStatus2 = _interopRequireDefault(_prisonerHealthStatus);

var _prisonerRollCallResult = require('./prisonerRollCallResult');

var _prisonerRollCallResult2 = _interopRequireDefault(_prisonerRollCallResult);

var _prisonerRollCallType = require('./prisonerRollCallType');

var _prisonerRollCallType2 = _interopRequireDefault(_prisonerRollCallType);

var _prisonMeetingRegisterType = require('./prisonMeetingRegisterType');

var _prisonMeetingRegisterType2 = _interopRequireDefault(_prisonMeetingRegisterType);

var _prisonMeetingStatus = require('./prisonMeetingStatus');

var _prisonMeetingStatus2 = _interopRequireDefault(_prisonMeetingStatus);

var _prisonMeetingType = require('./prisonMeetingType');

var _prisonMeetingType2 = _interopRequireDefault(_prisonMeetingType);

var _prisonMeetingUserType = require('./prisonMeetingUserType');

var _prisonMeetingUserType2 = _interopRequireDefault(_prisonMeetingUserType);

var _prisonMessage = require('./prisonMessage');

var _prisonMessage2 = _interopRequireDefault(_prisonMessage);

var _prisonRoomStatus = require('./prisonRoomStatus');

var _prisonRoomStatus2 = _interopRequireDefault(_prisonRoomStatus);

var _prisonRoomType = require('./prisonRoomType');

var _prisonRoomType2 = _interopRequireDefault(_prisonRoomType);

var _prisonTerminalType = require('./prisonTerminalType');

var _prisonTerminalType2 = _interopRequireDefault(_prisonTerminalType);

var _prisonTreeNodeType = require('./prisonTreeNodeType');

var _prisonTreeNodeType2 = _interopRequireDefault(_prisonTreeNodeType);

var _prisonUserType = require('./prisonUserType');

var _prisonUserType2 = _interopRequireDefault(_prisonUserType);

var _productIds = require('./productIds');

var _productIds2 = _interopRequireDefault(_productIds);

var _productInfo = require('./productInfo');

var _productInfo2 = _interopRequireDefault(_productInfo);

var _productOS = require('./productOS');

var _productOS2 = _interopRequireDefault(_productOS);

var _productType = require('./productType');

var _productType2 = _interopRequireDefault(_productType);

var _projectStatus = require('./projectStatus');

var _projectStatus2 = _interopRequireDefault(_projectStatus);

var _protocolService = require('./protocolService');

var _protocolService2 = _interopRequireDefault(_protocolService);

var _protocolServiceType = require('./protocolServiceType');

var _protocolServiceType2 = _interopRequireDefault(_protocolServiceType);

var _resourceCode = require('./resourceCode');

var _resourceCode2 = _interopRequireDefault(_resourceCode);

var _restQuery = require('./restQuery');

var _restQuery2 = _interopRequireDefault(_restQuery);

var _restQueryConst = require('./restQueryConst');

var _restQueryConst2 = _interopRequireDefault(_restQueryConst);

var _restReponse = require('./restReponse');

var _restReponse2 = _interopRequireDefault(_restReponse);

var _rfidTagExtra = require('./rfidTagExtra');

var _rfidTagExtra2 = _interopRequireDefault(_rfidTagExtra);

var _schoolAffiliatedType = require('./schoolAffiliatedType');

var _schoolAffiliatedType2 = _interopRequireDefault(_schoolAffiliatedType);

var _schoolCategory = require('./schoolCategory');

var _schoolCategory2 = _interopRequireDefault(_schoolCategory);

var _schoolEmergencyType = require('./schoolEmergencyType');

var _schoolEmergencyType2 = _interopRequireDefault(_schoolEmergencyType);

var _schoolNature = require('./schoolNature');

var _schoolNature2 = _interopRequireDefault(_schoolNature);

var _schoolCheckPaperType = require('./schoolCheckPaperType');

var _schoolCheckPaperType2 = _interopRequireDefault(_schoolCheckPaperType);

var _schoolCheckPlanStatus = require('./schoolCheckPlanStatus');

var _schoolCheckPlanStatus2 = _interopRequireDefault(_schoolCheckPlanStatus);

var _schoolCheckQuestionSource = require('./schoolCheckQuestionSource');

var _schoolCheckQuestionSource2 = _interopRequireDefault(_schoolCheckQuestionSource);

var _schoolCheckQuestionType = require('./schoolCheckQuestionType');

var _schoolCheckQuestionType2 = _interopRequireDefault(_schoolCheckQuestionType);

var _schoolCheckQuestionStatus = require('./schoolCheckQuestionStatus');

var _schoolCheckQuestionStatus2 = _interopRequireDefault(_schoolCheckQuestionStatus);

var _schoolCheckRedressStatus = require('./schoolCheckRedressStatus');

var _schoolCheckRedressStatus2 = _interopRequireDefault(_schoolCheckRedressStatus);

var _schoolCheckTaskStatus = require('./schoolCheckTaskStatus');

var _schoolCheckTaskStatus2 = _interopRequireDefault(_schoolCheckTaskStatus);

var _schoolCheckType = require('./schoolCheckType');

var _schoolCheckType2 = _interopRequireDefault(_schoolCheckType);

var _schoolUserType = require('./schoolUserType');

var _schoolUserType2 = _interopRequireDefault(_schoolUserType);

var _schoolCheckResult = require('./schoolCheckResult');

var _schoolCheckResult2 = _interopRequireDefault(_schoolCheckResult);

var _schoolChemicalType = require('./schoolChemicalType');

var _schoolChemicalType2 = _interopRequireDefault(_schoolChemicalType);

var _schoolReportActivityType = require('./schoolReportActivityType');

var _schoolReportActivityType2 = _interopRequireDefault(_schoolReportActivityType);

var _schoolReportActivityCategory = require('./schoolReportActivityCategory');

var _schoolReportActivityCategory2 = _interopRequireDefault(_schoolReportActivityCategory);

var _schoolMessageType = require('./schoolMessageType');

var _schoolMessageType2 = _interopRequireDefault(_schoolMessageType);

var _schoolMessageWrapperType = require('./schoolMessageWrapperType');

var _schoolMessageWrapperType2 = _interopRequireDefault(_schoolMessageWrapperType);

var _schoolMapType = require('./schoolMapType');

var _schoolMapType2 = _interopRequireDefault(_schoolMapType);

var _schoolNoticeType = require('./schoolNoticeType');

var _schoolNoticeType2 = _interopRequireDefault(_schoolNoticeType);

var _schoolWaterUsage = require('./schoolWaterUsage');

var _schoolWaterUsage2 = _interopRequireDefault(_schoolWaterUsage);

var _schoolLicenseType = require('./schoolLicenseType');

var _schoolLicenseType2 = _interopRequireDefault(_schoolLicenseType);

var _schoolDocumentType = require('./schoolDocumentType');

var _schoolDocumentType2 = _interopRequireDefault(_schoolDocumentType);

var _schoolCitizenReportBizType = require('./schoolCitizenReportBizType');

var _schoolCitizenReportBizType2 = _interopRequireDefault(_schoolCitizenReportBizType);

var _schoolCitizenReportDealResult = require('./schoolCitizenReportDealResult');

var _schoolCitizenReportDealResult2 = _interopRequireDefault(_schoolCitizenReportDealResult);

var _schoolCitizenReportSource = require('./schoolCitizenReportSource');

var _schoolCitizenReportSource2 = _interopRequireDefault(_schoolCitizenReportSource);

var _schoolCitizenReportTransferType = require('./schoolCitizenReportTransferType');

var _schoolCitizenReportTransferType2 = _interopRequireDefault(_schoolCitizenReportTransferType);

var _schoolCitizenReportUrgentLevel = require('./schoolCitizenReportUrgentLevel');

var _schoolCitizenReportUrgentLevel2 = _interopRequireDefault(_schoolCitizenReportUrgentLevel);

var _specificationSettings = require('./specificationSettings');

var _specificationSettings2 = _interopRequireDefault(_specificationSettings);

var _transmitMessage = require('./transmitMessage');

var _transmitMessage2 = _interopRequireDefault(_transmitMessage);

var _transmitMessageClient = require('./transmitMessageClient');

var _transmitMessageClient2 = _interopRequireDefault(_transmitMessageClient);

var _transmitMessageSpec = require('./transmitMessageSpec');

var _transmitMessageSpec2 = _interopRequireDefault(_transmitMessageSpec);

var _transmitMessageType = require('./transmitMessageType');

var _transmitMessageType2 = _interopRequireDefault(_transmitMessageType);

var _updateDetail = require('./updateDetail');

var _updateDetail2 = _interopRequireDefault(_updateDetail);

var _upsExtra = require('./upsExtra');

var _upsExtra2 = _interopRequireDefault(_upsExtra);

var _videoAnalyseExtra = require('./videoAnalyseExtra');

var _videoAnalyseExtra2 = _interopRequireDefault(_videoAnalyseExtra);

var _videoAnalyseType = require('./videoAnalyseType');

var _videoAnalyseType2 = _interopRequireDefault(_videoAnalyseType);

var _videoDiagnosticResult = require('./videoDiagnosticResult');

var _videoDiagnosticResult2 = _interopRequireDefault(_videoDiagnosticResult);

var _videoRecordSource = require('./videoRecordSource');

var _videoRecordSource2 = _interopRequireDefault(_videoRecordSource);

var _videoRecordStatus = require('./videoRecordStatus');

var _videoRecordStatus2 = _interopRequireDefault(_videoRecordStatus);

var _videoStorageType = require('./videoStorageType');

var _videoStorageType2 = _interopRequireDefault(_videoStorageType);

var _voicePrint = require('./voicePrint');

var _voicePrint2 = _interopRequireDefault(_voicePrint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    AirMonitorExtra: _airMonitorExtra2.default,

    BehaviorAnalyseExtra: _behaviorAnalyseExtra2.default,
    BioIdentifyMessage: _bioIdentifyMessage2.default,
    BioIdentifyType: _bioIdentifyType2.default,

    CallExtra: _callExtra2.default,
    CameraType: _cameraType2.default,
    CarPlateRecognitionExtra: _carPlateRecognitionExtra2.default,
    ConnectionMode: _connectionMode2.default,
    CpuInfo: _cpuInfo2.default,

    Descripter: _descripter2.default,
    DeviceAlarmCode: _deviceAlarmCode2.default,
    DeviceFaultCode: _deviceFaultCode2.default,
    DeviceControlCode: _deviceControlCode2.default,
    DeviceControlParam: _deviceControlParam2.default,
    DeviceDataType: _deviceDataType2.default,
    DeviceEventCode: _deviceEventCode2.default,
    DeviceEventData: _deviceEventData2.default,
    DeviceEventLevel: _deviceEventLevel2.default,
    DeviceEventType: _deviceEventType2.default,
    DeviceInterfaceCode: _deviceInterfaceCode2.default,
    DeviceWorkingStatus: _deviceWorkingStatus2.default,
    DigitalCommand: _digitalCommand2.default,
    DigitalContentType: _digitalContentType2.default,
    DigitalControlCode: _digitalControlCode2.default,
    DigitalLayout: _digitalLayout2.default,
    DigitalLayoutArea: _digitalLayoutArea2.default,
    DigitalMarquee: _digitalMarquee2.default,
    DigitalTerminalType: _digitalTerminalType2.default,
    ProductRegister: _discovery.ProductRegister,
    ServiceRegister: _discovery.ServiceRegister,
    ServiceDiscovery: _discovery.ServiceDiscovery,
    DiskInfo: _diskInfo2.default,
    DoorExtra: _doorExtra2.default,

    EnvMonitorExtra: _envMonitorExtra2.default,

    FaceRecognition: _faceRecognition2.default,
    FaceRecognitionExtra: _faceRecognitionExtra2.default,
    FaceRollCallFeedback: _faceRollCallFeedback2.default,
    FaceRollCallStatus: _faceRollCallStatus2.default,
    FingerPrint: _fingerPrint2.default,

    HospitalCall: _hospitalCall2.default,
    HospitalCallType: _hospitalCallType2.default,

    InitParam: _initParam2.default,

    MaintainRepairResult: _maintainRepairResult2.default,
    MaintainReportType: _maintainReportType2.default,
    MaintainRoleType: _maintainRoleType2.default,
    ManufacturerCode: _manufacturerCode2.default,
    MemoryInfo: _memoryInfo2.default,

    NicConfig: _nicConfig2.default,

    PrescriptionType: _prescriptionType2.default,
    PrisonBusinessType: _prisonBusinessType2.default,
    PrisonerActivity: _prisonerActivity2.default,
    PrisonerDiagnosticMethod: _prisonerDiagnosticMethod2.default,
    PrisonerDispatchRequestStatus: _prisonerDispatchRequestStatus2.default,
    PrisonerDoseResult: _prisonerDoseResult2.default,
    PrisonerDutySubType: _prisonerDutySubType2.default,
    PrisonerDutyType: _prisonerDutyType2.default,
    PrisonerHealthStatus: _prisonerHealthStatus2.default,
    PrisonerRollCallResult: _prisonerRollCallResult2.default,
    PrisonerRollCallType: _prisonerRollCallType2.default,
    PrisonMeetingRegisterType: _prisonMeetingRegisterType2.default,
    PrisonMeetingStatus: _prisonMeetingStatus2.default,
    PrisonMeetingType: _prisonMeetingType2.default,
    PrisonMeetingUserType: _prisonMeetingUserType2.default,
    PrisonMessage: _prisonMessage2.default,
    PrisonRoomStatus: _prisonRoomStatus2.default,
    PrisonRoomType: _prisonRoomType2.default,
    PrisonTerminalType: _prisonTerminalType2.default,
    PrisonTreeNodeType: _prisonTreeNodeType2.default,
    PrisonUserType: _prisonUserType2.default,
    ProductIds: _productIds2.default,
    ProductInfo: _productInfo2.default,
    ProductOS: _productOS2.default,
    ProductType: _productType2.default,
    ProjectStatus: _projectStatus2.default,
    ProtocolService: _protocolService2.default,
    ProtocolServiceType: _protocolServiceType2.default,

    ResourceCode: _resourceCode2.default,
    RestQuery: _restQuery2.default,
    RestQueryConst: _restQueryConst2.default,
    RestResponse: _restReponse2.default,
    RFIDTagExtra: _rfidTagExtra2.default,

    SchoolAffiliatedType: _schoolAffiliatedType2.default,
    SchoolCategory: _schoolCategory2.default,
    SchoolEmergencyType: _schoolEmergencyType2.default,
    SchoolNature: _schoolNature2.default,
    SchoolCheckPaperType: _schoolCheckPaperType2.default,
    SchoolCheckPlanStatus: _schoolCheckPlanStatus2.default,
    SchoolCheckQuestionSource: _schoolCheckQuestionSource2.default,
    SchoolCheckQuestionType: _schoolCheckQuestionType2.default,
    SchoolCheckQuestionStatus: _schoolCheckQuestionStatus2.default,
    SchoolCheckRedressStatus: _schoolCheckRedressStatus2.default,
    SchoolCheckTaskStatus: _schoolCheckTaskStatus2.default,
    SchoolCheckType: _schoolCheckType2.default,
    SchoolChemicalType: _schoolChemicalType2.default,
    SchoolCheckResult: _schoolCheckResult2.default,
    SchoolUserType: _schoolUserType2.default,
    SchoolReportActivityType: _schoolReportActivityType2.default,
    SchoolReportActivityCategory: _schoolReportActivityCategory2.default,
    SchoolMessageType: _schoolMessageType2.default,
    SchoolMessageWrapperType: _schoolMessageWrapperType2.default,
    SchoolMapType: _schoolMapType2.default,
    SchoolNoticeType: _schoolNoticeType2.default,
    SchoolWaterUsage: _schoolWaterUsage2.default,
    SchoolLicenseType: _schoolLicenseType2.default,
    SchoolDocumentType: _schoolDocumentType2.default,
    SchoolCitizenReportBizType: _schoolCitizenReportBizType2.default,
    SchoolCitizenReportDealResult: _schoolCitizenReportDealResult2.default,
    SchoolCitizenReportSource: _schoolCitizenReportSource2.default,
    SchoolCitizenReportTransferType: _schoolCitizenReportTransferType2.default,
    SchoolCitizenReportUrgentLevel: _schoolCitizenReportUrgentLevel2.default,

    SpecificationSettings: _specificationSettings2.default,

    TransmitMessage: _transmitMessage2.default,
    TransmitMessageClient: _transmitMessageClient2.default,
    TransmitMessageSpec: _transmitMessageSpec2.default,
    TransmitMessageType: _transmitMessageType2.default,

    UpdateDetail: _updateDetail2.default,
    UpsExtra: _upsExtra2.default,

    VideoAnalyseExtra: _videoAnalyseExtra2.default,
    VideoAnalyseType: _videoAnalyseType2.default,
    VideoDiagnosticResult: _videoDiagnosticResult2.default,
    VideoRecordSource: _videoRecordSource2.default,
    VideoRecordStatus: _videoRecordStatus2.default,
    VideoStorageType: _videoStorageType2.default,
    VoicePrint: _voicePrint2.default
};