'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var deviceStatusCode = {
  '-1': '未知类型',
  '0': '故障',
  '1': '打开',
  '2': '关闭',
  '3': '常开',
  '4': '常闭',
  '5': '撤防',
  '6': '布防',
  '7': '报警',
  '8': '旁路'
};
Object.freeze(deviceStatusCode);
var _default = deviceStatusCode;
exports.default = _default;