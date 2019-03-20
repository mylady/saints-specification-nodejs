/**
 * Created by wulei on 17-5-5.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var digitalContentType = {
  realVideo: {
    name: '直播源',
    value: 0
  },
  videoFile: {
    name: '视频文件',
    value: 1
  },
  audioFile: {
    name: '音频文件',
    value: 2
  },
  webPage: {
    name: '网页',
    value: 3
  },
  imageFile: {
    name: '图片文件',
    value: 4
  }
};
Object.freeze(digitalContentType);
var _default = digitalContentType;
exports.default = _default;