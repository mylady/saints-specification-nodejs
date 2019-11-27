'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var schoolCheckPaperType = {
  campusAround: {
    name: '校园及周边',
    value: 0
  },
  campusSecurity: {
    name: '校园安保',
    value: 1
  },
  educationBuilding: {
    name: '校舍建筑',
    value: 2
  },
  chemicalExperiment: {
    name: '化学实验',
    value: 3
  },
  sportArea: {
    name: '体育场所',
    value: 4
  },
  foodSanitation: {
    name: '食品卫生',
    value: 5
  },
  canteen: {
    name: '就餐场所',
    value: 6
  },
  dormitory: {
    name: '宿舍风险',
    value: 7
  },
  fireProtection: {
    name: '消防风险',
    value: 8
  },
  vehicle: {
    name: '车辆管理',
    value: 9
  },
  securityManage: {
    name: '安全管理',
    value: 10
  },
  uniform: {
    name: '校服安全',
    value: 11
  },
  others: {
    name: '其他',
    value: 100
  }
};
Object.freeze(schoolCheckPaperType);
var _default = schoolCheckPaperType;
exports.default = _default;