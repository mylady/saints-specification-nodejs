'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var schoolUserType = {
  schoolNormal: {
    name: '学校用户',
    value: 0
  },
  centerNormal: {
    name: '教育局用户',
    value: 1
  },
  schoolSecurity: {
    name: '学校安全人员',
    value: 2
  },
  centerSecurity: {
    name: '教育局安全人员',
    value: 3
  }
};
Object.freeze(schoolUserType);
var _default = schoolUserType;
exports["default"] = _default;