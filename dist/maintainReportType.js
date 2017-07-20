/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var maintainReportType = {
  manuReport: {
    name: '人工报修',
    value: 0
  },
  autoReport: {
    name: '自动报修',
    value: 1
  }
};

Object.freeze(maintainReportType);
exports.default = maintainReportType;