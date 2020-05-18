/**
 * Created by MyLady on 16/2/25.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _airMonitorExtra = _interopRequireDefault(require("./airMonitorExtra"));

var _appointmentStatus = _interopRequireDefault(require("./appointmentStatus"));

var _behaviorAnalyseExtra = _interopRequireDefault(require("./behaviorAnalyseExtra"));

var _bioIdentifyMessage = _interopRequireDefault(require("./bioIdentifyMessage"));

var _bioIdentifyType = _interopRequireDefault(require("./bioIdentifyType"));

var _callExtra = _interopRequireDefault(require("./callExtra"));

var _cameraType = _interopRequireDefault(require("./cameraType"));

var _carPlateRecognitionExtra = _interopRequireDefault(require("./carPlateRecognitionExtra"));

var _connectionMode = _interopRequireDefault(require("./connectionMode"));

var _cpuInfo = _interopRequireDefault(require("./cpuInfo"));

var _descripter = _interopRequireDefault(require("./descripter"));

var _deviceAlarmCode = _interopRequireDefault(require("./deviceAlarmCode"));

var _deviceFaultCode = _interopRequireDefault(require("./deviceFaultCode"));

var _deviceControlCode = _interopRequireDefault(require("./deviceControlCode"));

var _deviceControlParam = _interopRequireDefault(require("./deviceControlParam"));

var _deviceDataType = _interopRequireDefault(require("./deviceDataType"));

var _deviceEventCode = _interopRequireDefault(require("./deviceEventCode"));

var _deviceEventData = _interopRequireDefault(require("./deviceEventData"));

var _deviceEventLevel = _interopRequireDefault(require("./deviceEventLevel"));

var _deviceEventType = _interopRequireDefault(require("./deviceEventType"));

var _deviceInterfaceCode = _interopRequireDefault(require("./deviceInterfaceCode"));

var _deviceWorkingStatus = _interopRequireDefault(require("./deviceWorkingStatus"));

var _digitalCommand = _interopRequireDefault(require("./digitalCommand"));

var _digitalContentType = _interopRequireDefault(require("./digitalContentType"));

var _digitalControlCode = _interopRequireDefault(require("./digitalControlCode"));

var _digitalLayout = _interopRequireDefault(require("./digitalLayout"));

var _digitalLayoutArea = _interopRequireDefault(require("./digitalLayoutArea"));

var _digitalMarquee = _interopRequireDefault(require("./digitalMarquee"));

var _digitalTerminalType = _interopRequireDefault(require("./digitalTerminalType"));

var _diskInfo = _interopRequireDefault(require("./diskInfo"));

var _doorExtra = _interopRequireDefault(require("./doorExtra"));

var _envMonitorExtra = _interopRequireDefault(require("./envMonitorExtra"));

var _faceRecognition = _interopRequireDefault(require("./faceRecognition"));

var _faceRecognitionExtra = _interopRequireDefault(require("./faceRecognitionExtra"));

var _faceRollCallFeedback = _interopRequireDefault(require("./faceRollCallFeedback"));

var _faceRollCallStatus = _interopRequireDefault(require("./faceRollCallStatus"));

var _fingerPrint = _interopRequireDefault(require("./fingerPrint"));

var _hospitalCall = _interopRequireDefault(require("./hospitalCall"));

var _hospitalCallType = _interopRequireDefault(require("./hospitalCallType"));

var _initParam = _interopRequireDefault(require("./initParam"));

var _maintainRepairResult = _interopRequireDefault(require("./maintainRepairResult"));

var _maintainReportType = _interopRequireDefault(require("./maintainReportType"));

var _maintainRoleType = _interopRequireDefault(require("./maintainRoleType"));

var _manufacturerCode = _interopRequireDefault(require("./manufacturerCode"));

var _memoryInfo = _interopRequireDefault(require("./memoryInfo"));

var _nicConfig = _interopRequireDefault(require("./nicConfig"));

var _prescriptionType = _interopRequireDefault(require("./prescriptionType"));

var _prisonBusinessType = _interopRequireDefault(require("./prisonBusinessType"));

var _prisonDutyTableType = _interopRequireDefault(require("./prisonDutyTableType"));

var _prisonerActivity = _interopRequireDefault(require("./prisonerActivity"));

var _prisonerDiagnosticMethod = _interopRequireDefault(require("./prisonerDiagnosticMethod"));

var _prisonerDispatchRequestStatus = _interopRequireDefault(require("./prisonerDispatchRequestStatus"));

var _prisonerDoseResult = _interopRequireDefault(require("./prisonerDoseResult"));

var _prisonerDutySubType = _interopRequireDefault(require("./prisonerDutySubType"));

var _prisonerDutyType = _interopRequireDefault(require("./prisonerDutyType"));

var _prisonerHealthStatus = _interopRequireDefault(require("./prisonerHealthStatus"));

var _prisonerRollCallResult = _interopRequireDefault(require("./prisonerRollCallResult"));

var _prisonerRollCallType = _interopRequireDefault(require("./prisonerRollCallType"));

var _prisonMeetingRegisterType = _interopRequireDefault(require("./prisonMeetingRegisterType"));

var _prisonMeetingStatus = _interopRequireDefault(require("./prisonMeetingStatus"));

var _prisonMeetingReservationStatus = _interopRequireDefault(require("./prisonMeetingReservationStatus"));

var _prisonMeetingType = _interopRequireDefault(require("./prisonMeetingType"));

var _prisonMeetingUserType = _interopRequireDefault(require("./prisonMeetingUserType"));

var _prisonMessage = _interopRequireDefault(require("./prisonMessage"));

var _prisonRoomStatus = _interopRequireDefault(require("./prisonRoomStatus"));

var _prisonRoomType = _interopRequireDefault(require("./prisonRoomType"));

var _prisonTerminalType = _interopRequireDefault(require("./prisonTerminalType"));

var _prisonMeetingTerminalType = _interopRequireDefault(require("./prisonMeetingTerminalType"));

var _prisonTreeNodeType = _interopRequireDefault(require("./prisonTreeNodeType"));

var _prisonUserType = _interopRequireDefault(require("./prisonUserType"));

var _prisonVisitType = _interopRequireDefault(require("./prisonVisitType"));

var _prisonWorkNumberType = _interopRequireDefault(require("./prisonWorkNumberType"));

var _prisonMeetingQueueStatus = _interopRequireDefault(require("./prisonMeetingQueueStatus"));

var _prisonStaffType = _interopRequireDefault(require("./prisonStaffType"));

var _prisonRemindType = _interopRequireDefault(require("./prisonRemindType"));

var _prisonPatrolRecordStatus = _interopRequireDefault(require("./prisonPatrolRecordStatus"));

var _prisonPoliceAssessmentStatus = _interopRequireDefault(require("./prisonPoliceAssessmentStatus"));

var _prisonUserOperationType = _interopRequireDefault(require("./prisonUserOperationType"));

var _prisonClueStatus = _interopRequireDefault(require("./prisonClueStatus"));

var _productIds = _interopRequireDefault(require("./productIds"));

var _productInfo = _interopRequireDefault(require("./productInfo"));

var _productOS = _interopRequireDefault(require("./productOS"));

var _productType = _interopRequireDefault(require("./productType"));

var _projectStatus = _interopRequireDefault(require("./projectStatus"));

var _protocolService = _interopRequireDefault(require("./protocolService"));

var _protocolServiceType = _interopRequireDefault(require("./protocolServiceType"));

var _resourceCode = _interopRequireDefault(require("./resourceCode"));

var _restQuery = _interopRequireDefault(require("./restQuery"));

var _restQueryConst = _interopRequireDefault(require("./restQueryConst"));

var _restReponse = _interopRequireDefault(require("./restReponse"));

var _rfidTagExtra = _interopRequireDefault(require("./rfidTagExtra"));

var _schoolAffiliatedType = _interopRequireDefault(require("./schoolAffiliatedType"));

var _schoolCanteenType = _interopRequireDefault(require("./schoolCanteenType"));

var _schoolCategory = _interopRequireDefault(require("./schoolCategory"));

var _schoolEmergencyType = _interopRequireDefault(require("./schoolEmergencyType"));

var _schoolNature = _interopRequireDefault(require("./schoolNature"));

var _schoolCheckPaperType = _interopRequireDefault(require("./schoolCheckPaperType"));

var _schoolCheckPlanStatus = _interopRequireDefault(require("./schoolCheckPlanStatus"));

var _schoolCheckQuestionSource = _interopRequireDefault(require("./schoolCheckQuestionSource"));

var _schoolCheckQuestionType = _interopRequireDefault(require("./schoolCheckQuestionType"));

var _schoolCheckQuestionStatus = _interopRequireDefault(require("./schoolCheckQuestionStatus"));

var _schoolCheckRedressStatus = _interopRequireDefault(require("./schoolCheckRedressStatus"));

var _schoolCheckTaskStatus = _interopRequireDefault(require("./schoolCheckTaskStatus"));

var _schoolCheckType = _interopRequireDefault(require("./schoolCheckType"));

var _schoolUserType = _interopRequireDefault(require("./schoolUserType"));

var _schoolCheckResult = _interopRequireDefault(require("./schoolCheckResult"));

var _schoolChemicalType = _interopRequireDefault(require("./schoolChemicalType"));

var _schoolReportActivityType = _interopRequireDefault(require("./schoolReportActivityType"));

var _schoolReportActivityCategory = _interopRequireDefault(require("./schoolReportActivityCategory"));

var _schoolReportEventType = _interopRequireDefault(require("./schoolReportEventType"));

var _schoolMessageType = _interopRequireDefault(require("./schoolMessageType"));

var _schoolMessageWrapperType = _interopRequireDefault(require("./schoolMessageWrapperType"));

var _schoolMapType = _interopRequireDefault(require("./schoolMapType"));

var _schoolNoticeType = _interopRequireDefault(require("./schoolNoticeType"));

var _schoolWaterUsage = _interopRequireDefault(require("./schoolWaterUsage"));

var _schoolLicenseType = _interopRequireDefault(require("./schoolLicenseType"));

var _schoolDocumentType = _interopRequireDefault(require("./schoolDocumentType"));

var _schoolCitizenReportBizType = _interopRequireDefault(require("./schoolCitizenReportBizType"));

var _schoolCitizenReportDealResult = _interopRequireDefault(require("./schoolCitizenReportDealResult"));

var _schoolCitizenReportSource = _interopRequireDefault(require("./schoolCitizenReportSource"));

var _schoolCitizenReportTransferType = _interopRequireDefault(require("./schoolCitizenReportTransferType"));

var _schoolCitizenReportUrgentLevel = _interopRequireDefault(require("./schoolCitizenReportUrgentLevel"));

var _schoolVacateType = _interopRequireDefault(require("./schoolVacateType"));

var _schoolLogType = _interopRequireDefault(require("./schoolLogType"));

var _schoolDiningType = _interopRequireDefault(require("./schoolDiningType"));

var _schoolDiningProvideType = _interopRequireDefault(require("./schoolDiningProvideType"));

var _schoolSecurityGroupCustomType = _interopRequireDefault(require("./schoolSecurityGroupCustomType"));

var _specificationSettings = _interopRequireDefault(require("./specificationSettings"));

var _transmitMessage = _interopRequireDefault(require("./transmitMessage"));

var _transmitMessageClient = _interopRequireDefault(require("./transmitMessageClient"));

var _transmitMessageSpec = _interopRequireDefault(require("./transmitMessageSpec"));

var _transmitMessageType = _interopRequireDefault(require("./transmitMessageType"));

var _updateDetail = _interopRequireDefault(require("./updateDetail"));

var _upsExtra = _interopRequireDefault(require("./upsExtra"));

var _videoAnalyseExtra = _interopRequireDefault(require("./videoAnalyseExtra"));

var _videoAnalyseType = _interopRequireDefault(require("./videoAnalyseType"));

var _videoDiagnosticResult = _interopRequireDefault(require("./videoDiagnosticResult"));

var _videoRecordSource = _interopRequireDefault(require("./videoRecordSource"));

var _videoRecordStatus = _interopRequireDefault(require("./videoRecordStatus"));

var _videoStorageType = _interopRequireDefault(require("./videoStorageType"));

var _voicePrint = _interopRequireDefault(require("./voicePrint"));

// import {
//     ProductRegister,
//     ServiceRegister,
//     ServiceDiscovery
// } from './discovery';
var _default = {
  AirMonitorExtra: _airMonitorExtra.default,
  AppointmentStatus: _appointmentStatus.default,
  BehaviorAnalyseExtra: _behaviorAnalyseExtra.default,
  BioIdentifyMessage: _bioIdentifyMessage.default,
  BioIdentifyType: _bioIdentifyType.default,
  CallExtra: _callExtra.default,
  CameraType: _cameraType.default,
  CarPlateRecognitionExtra: _carPlateRecognitionExtra.default,
  ConnectionMode: _connectionMode.default,
  CpuInfo: _cpuInfo.default,
  Descripter: _descripter.default,
  DeviceAlarmCode: _deviceAlarmCode.default,
  DeviceFaultCode: _deviceFaultCode.default,
  DeviceControlCode: _deviceControlCode.default,
  DeviceControlParam: _deviceControlParam.default,
  DeviceDataType: _deviceDataType.default,
  DeviceEventCode: _deviceEventCode.default,
  DeviceEventData: _deviceEventData.default,
  DeviceEventLevel: _deviceEventLevel.default,
  DeviceEventType: _deviceEventType.default,
  DeviceInterfaceCode: _deviceInterfaceCode.default,
  DeviceWorkingStatus: _deviceWorkingStatus.default,
  DigitalCommand: _digitalCommand.default,
  DigitalContentType: _digitalContentType.default,
  DigitalControlCode: _digitalControlCode.default,
  DigitalLayout: _digitalLayout.default,
  DigitalLayoutArea: _digitalLayoutArea.default,
  DigitalMarquee: _digitalMarquee.default,
  DigitalTerminalType: _digitalTerminalType.default,
  // ProductRegister: ProductRegister,
  // ServiceRegister: ServiceRegister,
  // ServiceDiscovery: ServiceDiscovery,
  DiskInfo: _diskInfo.default,
  DoorExtra: _doorExtra.default,
  EnvMonitorExtra: _envMonitorExtra.default,
  FaceRecognition: _faceRecognition.default,
  FaceRecognitionExtra: _faceRecognitionExtra.default,
  FaceRollCallFeedback: _faceRollCallFeedback.default,
  FaceRollCallStatus: _faceRollCallStatus.default,
  FingerPrint: _fingerPrint.default,
  HospitalCall: _hospitalCall.default,
  HospitalCallType: _hospitalCallType.default,
  InitParam: _initParam.default,
  MaintainRepairResult: _maintainRepairResult.default,
  MaintainReportType: _maintainReportType.default,
  MaintainRoleType: _maintainRoleType.default,
  ManufacturerCode: _manufacturerCode.default,
  MemoryInfo: _memoryInfo.default,
  NicConfig: _nicConfig.default,
  PrescriptionType: _prescriptionType.default,
  PrisonBusinessType: _prisonBusinessType.default,
  PrisonDutyTableType: _prisonDutyTableType.default,
  PrisonerActivity: _prisonerActivity.default,
  PrisonerDiagnosticMethod: _prisonerDiagnosticMethod.default,
  PrisonerDispatchRequestStatus: _prisonerDispatchRequestStatus.default,
  PrisonerDoseResult: _prisonerDoseResult.default,
  PrisonerDutySubType: _prisonerDutySubType.default,
  PrisonerDutyType: _prisonerDutyType.default,
  PrisonerHealthStatus: _prisonerHealthStatus.default,
  PrisonerRollCallResult: _prisonerRollCallResult.default,
  PrisonerRollCallType: _prisonerRollCallType.default,
  PrisonMeetingRegisterType: _prisonMeetingRegisterType.default,
  PrisonMeetingStatus: _prisonMeetingStatus.default,
  prisonMeetingReservationStatus: prisonMeetingReservationStatus,
  PrisonMeetingType: _prisonMeetingType.default,
  PrisonMeetingUserType: _prisonMeetingUserType.default,
  PrisonMessage: _prisonMessage.default,
  PrisonRoomStatus: _prisonRoomStatus.default,
  PrisonRoomType: _prisonRoomType.default,
  PrisonTerminalType: _prisonTerminalType.default,
  PrisonMeetingTerminalType: _prisonMeetingTerminalType.default,
  PrisonTreeNodeType: _prisonTreeNodeType.default,
  PrisonUserType: _prisonUserType.default,
  PrisonVisitType: _prisonVisitType.default,
  PrisonWorkNumberType: _prisonWorkNumberType.default,
  PrisonMeetingQueueStatus: _prisonMeetingQueueStatus.default,
  PrisonStaffType: _prisonStaffType.default,
  PrisonRemindType: _prisonRemindType.default,
  PrisonPatrolRecordStatus: _prisonPatrolRecordStatus.default,
  PrisonPoliceAssessmentStatus: _prisonPoliceAssessmentStatus.default,
  PrisonUserOperationType: _prisonUserOperationType.default,
  PrisonClueStatus: _prisonClueStatus.default,
  ProductIds: _productIds.default,
  ProductInfo: _productInfo.default,
  ProductOS: _productOS.default,
  ProductType: _productType.default,
  ProjectStatus: _projectStatus.default,
  ProtocolService: _protocolService.default,
  ProtocolServiceType: _protocolServiceType.default,
  ResourceCode: _resourceCode.default,
  RestQuery: _restQuery.default,
  RestQueryConst: _restQueryConst.default,
  RestResponse: _restReponse.default,
  RFIDTagExtra: _rfidTagExtra.default,
  SchoolAffiliatedType: _schoolAffiliatedType.default,
  SchoolCanteenType: _schoolCanteenType.default,
  SchoolCategory: _schoolCategory.default,
  SchoolEmergencyType: _schoolEmergencyType.default,
  SchoolNature: _schoolNature.default,
  SchoolCheckPaperType: _schoolCheckPaperType.default,
  SchoolCheckPlanStatus: _schoolCheckPlanStatus.default,
  SchoolCheckQuestionSource: _schoolCheckQuestionSource.default,
  SchoolCheckQuestionType: _schoolCheckQuestionType.default,
  SchoolCheckQuestionStatus: _schoolCheckQuestionStatus.default,
  SchoolCheckRedressStatus: _schoolCheckRedressStatus.default,
  SchoolCheckTaskStatus: _schoolCheckTaskStatus.default,
  SchoolCheckType: _schoolCheckType.default,
  SchoolChemicalType: _schoolChemicalType.default,
  SchoolCheckResult: _schoolCheckResult.default,
  SchoolUserType: _schoolUserType.default,
  SchoolReportActivityType: _schoolReportActivityType.default,
  SchoolReportActivityCategory: _schoolReportActivityCategory.default,
  SchoolReportEventType: _schoolReportEventType.default,
  SchoolMessageType: _schoolMessageType.default,
  SchoolMessageWrapperType: _schoolMessageWrapperType.default,
  SchoolMapType: _schoolMapType.default,
  SchoolNoticeType: _schoolNoticeType.default,
  SchoolWaterUsage: _schoolWaterUsage.default,
  SchoolLicenseType: _schoolLicenseType.default,
  SchoolDocumentType: _schoolDocumentType.default,
  SchoolCitizenReportBizType: _schoolCitizenReportBizType.default,
  SchoolCitizenReportDealResult: _schoolCitizenReportDealResult.default,
  SchoolCitizenReportSource: _schoolCitizenReportSource.default,
  SchoolCitizenReportTransferType: _schoolCitizenReportTransferType.default,
  SchoolCitizenReportUrgentLevel: _schoolCitizenReportUrgentLevel.default,
  SchoolVacateType: _schoolVacateType.default,
  SchoolLogType: _schoolLogType.default,
  SchoolDiningType: _schoolDiningType.default,
  SchoolDiningProvideType: _schoolDiningProvideType.default,
  SchoolSecurityGroupCustomType: _schoolSecurityGroupCustomType.default,
  SpecificationSettings: _specificationSettings.default,
  TransmitMessage: _transmitMessage.default,
  TransmitMessageClient: _transmitMessageClient.default,
  TransmitMessageSpec: _transmitMessageSpec.default,
  TransmitMessageType: _transmitMessageType.default,
  UpdateDetail: _updateDetail.default,
  UpsExtra: _upsExtra.default,
  VideoAnalyseExtra: _videoAnalyseExtra.default,
  VideoAnalyseType: _videoAnalyseType.default,
  VideoDiagnosticResult: _videoDiagnosticResult.default,
  VideoRecordSource: _videoRecordSource.default,
  VideoRecordStatus: _videoRecordStatus.default,
  VideoStorageType: _videoStorageType.default,
  VoicePrint: _voicePrint.default
};
exports.default = _default;