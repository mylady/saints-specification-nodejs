'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var FaceRecognition = function FaceRecognition() {
  (0, _classCallCheck2["default"])(this, FaceRecognition);
  this.CameraAddress = '';
  this.FaceImagePath = '';
  this.SceneImagePath = '';
  this.FaceX = 0;
  this.FaceY = 0;
  this.FaceWidth = 0;
  this.FaceHeight = 0;
  this.IsHit = false;
  this.HitImagePath = '';
  this.Similarity = 0;
  this.PersonId = '';
  this.PersonName = '';
};

exports["default"] = FaceRecognition;