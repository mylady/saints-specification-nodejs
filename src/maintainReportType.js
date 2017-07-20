/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';
let maintainReportType = {
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

export default maintainReportType;