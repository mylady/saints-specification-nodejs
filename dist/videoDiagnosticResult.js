/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var videoDiagnosticResult = {
  unknown: {
    name: '未知',
    value: -1
  },
  normal: {
    name: '正常',
    value: 0
  },
  offline: {
    name: '离线',
    value: 1
  },
  videoLost: {
    name: '视频丢失',
    value: 2
  },
  bright: {
    name: '亮度异常',
    value: 3
  },
  color: {
    name: '颜色异常',
    value: 4
  },
  contract: {
    name: '对比度异常',
    value: 5
  },
  frozen: {
    name: '画面冻结',
    value: 6
  },
  blur: {
    name: '图像模糊',
    value: 7
  },
  noise: {
    name: '噪声干扰',
    value: 8
  },
  wave: {
    name: '强横纹',
    value: 9
  },
  roll: {
    name: '滚屏',
    value: 10
  }
};
Object.freeze(videoDiagnosticResult);
var _default = videoDiagnosticResult;
exports["default"] = _default;