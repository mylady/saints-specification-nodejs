/**
 * Created by XFY on 2017/7/13.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonerDiagnosticMethod = {
  medicalTreat: {
    name: '药物处置',
    value: 0
  },
  nonMedicalTreat: {
    name: '非药物处置',
    value: 1
  },
  goHospital: {
    name: '所外就医',
    value: 2
  }
};

Object.freeze(prisonerDiagnosticMethod);
exports.default = prisonerDiagnosticMethod;