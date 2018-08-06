/**
 * Created by MyLady on 16/2/25.
 */

'use strict';

import AirMonitorExtra from './airMonitorExtra';

import BehaviorAnalyseExtra from './behaviorAnalyseExtra';
import BioIdentifyMessage from './bioIdentifyMessage';
import BioIdentifyType from './bioIdentifyType';

import CallExtra from './callExtra';
import CameraType from './cameraType';
import CarPlateRecognitionExtra from './carPlateRecognitionExtra';
import ConnectionMode from './connectionMode';
import CpuInfo from './cpuInfo';

import Descripter from './descripter';
import DeviceAlarmCode from './deviceAlarmCode';
import DeviceFaultCode from './deviceFaultCode';
import DeviceControlCode from './deviceControlCode';
import DeviceControlParam from './deviceControlParam';
import DeviceDataType from './deviceDataType';
import DeviceEventCode from './deviceEventCode';
import DeviceEventData from './deviceEventData';
import DeviceEventLevel from './deviceEventLevel';
import DeviceEventType from './deviceEventType';
import DeviceInterfaceCode from './deviceInterfaceCode';
import DeviceWorkingStatus from './deviceWorkingStatus';
import DigitalCommand from './digitalCommand';
import DigitalContentType from './digitalContentType';
import DigitalControlCode from './digitalControlCode';
import DigitalLayout from './digitalLayout';
import DigitalLayoutArea from './digitalLayoutArea';
import DigitalMarquee from './digitalMarquee';
import DigitalTerminalType from './digitalTerminalType';
import {
    ProductRegister,
    ServiceRegister,
    ServiceDiscovery
} from './discovery';
import DiskInfo from './diskInfo';
import DoorExtra from './doorExtra';

import EnvMonitorExtra from './envMonitorExtra';

import FaceRecognition from './faceRecognition';
import FaceRecognitionExtra from './faceRecognitionExtra';
import FaceRollCallFeedback from './faceRollCallFeedback';
import FaceRollCallStatus from './faceRollCallStatus';
import FingerPrint from './fingerPrint';

import HospitalCall from './hospitalCall';
import HospitalCallType from './hospitalCallType';

import InitParam from './initParam';

import MaintainRepairResult from './maintainRepairResult';
import MaintainReportType from './maintainReportType';
import MaintainRoleType from './maintainRoleType';
import ManufacturerCode from './manufacturerCode';
import MemoryInfo from './memoryInfo';

import NicConfig from './nicConfig';

import PrescriptionType from './prescriptionType';
import PrisonBusinessType from './prisonBusinessType';
import PrisonerActivity from './prisonerActivity';
import PrisonerDiagnosticMethod from './prisonerDiagnosticMethod';
import PrisonerDispatchRequestStatus from './prisonerDispatchRequestStatus';
import PrisonerDoseResult from './prisonerDoseResult';
import PrisonerDutySubType from './prisonerDutySubType';
import PrisonerDutyType from './prisonerDutyType';
import PrisonerHealthStatus from './prisonerHealthStatus';
import PrisonerRollCallResult from './prisonerRollCallResult';
import PrisonerRollCallType from './prisonerRollCallType';
import PrisonMeetingRegisterType from './prisonMeetingRegisterType';
import PrisonMeetingStatus from './prisonMeetingStatus';
import PrisonMeetingType from './prisonMeetingType';
import PrisonMeetingUserType from './prisonMeetingUserType';
import PrisonMessage from './prisonMessage';
import PrisonRoomStatus from './prisonRoomStatus';
import PrisonRoomType from './prisonRoomType';
import PrisonTerminalType from './prisonTerminalType';
import PrisonTreeNodeType from './prisonTreeNodeType';
import PrisonUserType from './prisonUserType';
import ProductIds from './productIds';
import ProductInfo from './productInfo';
import ProductOS from './productOS';
import ProductType from './productType';
import ProjectStatus from './projectStatus';
import ProtocolService from './protocolService';
import ProtocolServiceType from './protocolServiceType';

import ResourceCode from './resourceCode';
import RestQuery from './restQuery';
import RestQueryConst from './restQueryConst';
import RestResponse from './restReponse';
import RFIDTagExtra from './rfidTagExtra';

import SchoolCategory from './schoolCategory';
import SchoolEmergencyType from './schoolEmergencyType';
import SchoolNature from './schoolNature';
import SchoolCheckPaperType from './schoolCheckPaperType';
import SchoolCheckPlanStatus from './schoolCheckPlanStatus';
import SchoolCheckQuestionSource from './schoolCheckQuestionSource';
import SchoolCheckQuestionType from './schoolCheckQuestionType';
import SchoolCheckQuestionStatus from './schoolCheckQuestionStatus';
import SchoolCheckRedressStatus from './schoolCheckRedressStatus';
import SchoolCheckTaskStatus from './schoolCheckTaskStatus';
import SchoolCheckType from './schoolCheckType';
import SchoolUserType from './schoolUserType';
import SchoolCheckResult from './schoolCheckResult';
import SchoolChemicalType from './schoolChemicalType';
import SchoolReportActivityType from './schoolReportActivityType';
import SchoolReportActivityCategory from './schoolReportActivityCategory';
import SchoolMessageType from './schoolMessageType';
import SchoolMessageWrapperType from './schoolMessageWrapperType';
import SchoolMapType from './schoolMapType';
import SchoolNoticeType from './schoolNoticeType';
import SchoolWaterUsage from './schoolWaterUsage';
import SchoolLicenseType from './schoolLicenseType';
import SchoolDocumentType from './schoolDocumentType';
import SchoolCitizenReportBizType from './schoolCitizenReportBizType';
import SchoolCitizenReportDealResult from './schoolCitizenReportDealResult';
import SchoolCitizenReportSource from './schoolCitizenReportSource';
import SchoolCitizenReportTransferType from './schoolCitizenReportTransferType';
import SchoolCitizenReportUrgentLevel from './schoolCitizenReportUrgentLevel';

import SpecificationSettings from './specificationSettings';

import TransmitMessage from './transmitMessage';
import TransmitMessageClient from './transmitMessageClient';
import TransmitMessageSpec from './transmitMessageSpec';
import TransmitMessageType from './transmitMessageType';

import UpdateDetail from './updateDetail';
import UpsExtra from './upsExtra';

import VideoAnalyseExtra from './videoAnalyseExtra';
import VideoAnalyseType from './videoAnalyseType';
import VideoDiagnosticResult from './videoDiagnosticResult';
import VideoRecordSource from './videoRecordSource';
import VideoRecordStatus from './videoRecordStatus';
import VideoStorageType from './videoStorageType';
import VoicePrint from './voicePrint';

export default {
    AirMonitorExtra: AirMonitorExtra,

    BehaviorAnalyseExtra: BehaviorAnalyseExtra,
    BioIdentifyMessage: BioIdentifyMessage,
    BioIdentifyType: BioIdentifyType,

    CallExtra: CallExtra,
    CameraType: CameraType,
    CarPlateRecognitionExtra: CarPlateRecognitionExtra,
    ConnectionMode: ConnectionMode,
    CpuInfo: CpuInfo,

    Descripter: Descripter,
    DeviceAlarmCode: DeviceAlarmCode,
    DeviceFaultCode: DeviceFaultCode,
    DeviceControlCode: DeviceControlCode,
    DeviceControlParam: DeviceControlParam,
    DeviceDataType: DeviceDataType,
    DeviceEventCode: DeviceEventCode,
    DeviceEventData: DeviceEventData,
    DeviceEventLevel: DeviceEventLevel,
    DeviceEventType: DeviceEventType,
    DeviceInterfaceCode: DeviceInterfaceCode,
    DeviceWorkingStatus: DeviceWorkingStatus,
    DigitalCommand: DigitalCommand,
    DigitalContentType: DigitalContentType,
    DigitalControlCode: DigitalControlCode,
    DigitalLayout: DigitalLayout,
    DigitalLayoutArea: DigitalLayoutArea,
    DigitalMarquee: DigitalMarquee,
    DigitalTerminalType: DigitalTerminalType,
    ProductRegister: ProductRegister,
    ServiceRegister: ServiceRegister,
    ServiceDiscovery: ServiceDiscovery,
    DiskInfo: DiskInfo,
    DoorExtra: DoorExtra,

    EnvMonitorExtra: EnvMonitorExtra,

    FaceRecognition: FaceRecognition,
    FaceRecognitionExtra: FaceRecognitionExtra,
    FaceRollCallFeedback: FaceRollCallFeedback,
    FaceRollCallStatus: FaceRollCallStatus,
    FingerPrint: FingerPrint,

    HospitalCall: HospitalCall,
    HospitalCallType: HospitalCallType,

    InitParam: InitParam,

    MaintainRepairResult: MaintainRepairResult,
    MaintainReportType: MaintainReportType,
    MaintainRoleType: MaintainRoleType,
    ManufacturerCode: ManufacturerCode,
    MemoryInfo: MemoryInfo,

    NicConfig: NicConfig,

    PrescriptionType: PrescriptionType,
    PrisonBusinessType: PrisonBusinessType,
    PrisonerActivity: PrisonerActivity,
    PrisonerDiagnosticMethod: PrisonerDiagnosticMethod,
    PrisonerDispatchRequestStatus: PrisonerDispatchRequestStatus,
    PrisonerDoseResult: PrisonerDoseResult,
    PrisonerDutySubType: PrisonerDutySubType,
    PrisonerDutyType: PrisonerDutyType,
    PrisonerHealthStatus: PrisonerHealthStatus,
    PrisonerRollCallResult: PrisonerRollCallResult,
    PrisonerRollCallType: PrisonerRollCallType,
    PrisonMeetingRegisterType: PrisonMeetingRegisterType,
    PrisonMeetingStatus: PrisonMeetingStatus,
    PrisonMeetingType: PrisonMeetingType,
    PrisonMeetingUserType : PrisonMeetingUserType,
    PrisonMessage: PrisonMessage,
    PrisonRoomStatus: PrisonRoomStatus,
    PrisonRoomType: PrisonRoomType,
    PrisonTerminalType: PrisonTerminalType,
    PrisonTreeNodeType: PrisonTreeNodeType,
    PrisonUserType: PrisonUserType,
    ProductIds: ProductIds,
    ProductInfo: ProductInfo,
    ProductOS: ProductOS,
    ProductType: ProductType,
    ProjectStatus: ProjectStatus,
    ProtocolService: ProtocolService,
    ProtocolServiceType: ProtocolServiceType,

    ResourceCode: ResourceCode,
    RestQuery: RestQuery,
    RestQueryConst: RestQueryConst,
    RestResponse: RestResponse,
    RFIDTagExtra: RFIDTagExtra,

    SchoolCategory: SchoolCategory,
    SchoolEmergencyType: SchoolEmergencyType,
    SchoolNature: SchoolNature,
    SchoolCheckPaperType: SchoolCheckPaperType,
    SchoolCheckPlanStatus: SchoolCheckPlanStatus,
    SchoolCheckQuestionSource: SchoolCheckQuestionSource,
    SchoolCheckQuestionType: SchoolCheckQuestionType,
    SchoolCheckQuestionStatus: SchoolCheckQuestionStatus,
    SchoolCheckRedressStatus: SchoolCheckRedressStatus,
    SchoolCheckTaskStatus: SchoolCheckTaskStatus,
    SchoolCheckType: SchoolCheckType,
    SchoolChemicalType: SchoolChemicalType,
    SchoolCheckResult: SchoolCheckResult,
    SchoolUserType: SchoolUserType,
    SchoolReportActivityType: SchoolReportActivityType,
    SchoolReportActivityCategory: SchoolReportActivityCategory,
    SchoolMessageType: SchoolMessageType,
    SchoolMessageWrapperType: SchoolMessageWrapperType,
    SchoolMapType: SchoolMapType,
    SchoolNoticeType: SchoolNoticeType,
    SchoolWaterUsage: SchoolWaterUsage,
    SchoolLicenseType: SchoolLicenseType,
    SchoolDocumentType: SchoolDocumentType,
    SchoolCitizenReportBizType: SchoolCitizenReportBizType,
    SchoolCitizenReportDealResult: SchoolCitizenReportDealResult,
    SchoolCitizenReportSource: SchoolCitizenReportSource,
    SchoolCitizenReportTransferType: SchoolCitizenReportTransferType,
    SchoolCitizenReportUrgentLevel: SchoolCitizenReportUrgentLevel,

    SpecificationSettings: SpecificationSettings,

    TransmitMessage: TransmitMessage,
    TransmitMessageClient: TransmitMessageClient,
    TransmitMessageSpec: TransmitMessageSpec,
    TransmitMessageType: TransmitMessageType,

    UpdateDetail: UpdateDetail,
    UpsExtra: UpsExtra,

    VideoAnalyseExtra: VideoAnalyseExtra,
    VideoAnalyseType: VideoAnalyseType,
    VideoDiagnosticResult: VideoDiagnosticResult,
    VideoRecordSource: VideoRecordSource,
    VideoRecordStatus: VideoRecordStatus,
    VideoStorageType: VideoStorageType,
    VoicePrint: VoicePrint
}