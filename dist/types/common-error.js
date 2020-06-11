"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CommonErrorInvalidAccessToken = {
  message: '不合法的访问令牌',
  code: 0
};

var CommonError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(CommonError, _Error);

  var _super = _createSuper(CommonError);

  function CommonError(obj) {
    var _this;

    (0, _classCallCheck2["default"])(this, CommonError);
    _this = _super.call(this);

    if (obj.hasOwnProperty('message') && obj.hasOwnProperty('code')) {
      _this.message = obj.message;
      _this.code = obj.code;
    } else {
      _this.message = '';
      _this.code = 0;
    }

    return _this;
  }

  (0, _createClass2["default"])(CommonError, null, [{
    key: "invalidAccessToken",
    value: function invalidAccessToken() {
      return new CommonError(CommonErrorInvalidAccessToken);
    }
  }]);
  return CommonError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = CommonError;