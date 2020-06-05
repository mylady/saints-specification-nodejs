'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var PowerGridValue = function PowerGridValue(_ref) {
  var volter = _ref.volter,
      elec = _ref.elec;
  (0, _classCallCheck2["default"])(this, PowerGridValue);
  this.volter = volter || 0.0;
  this.elec = elec || 0.0;
};

exports["default"] = PowerGridValue;