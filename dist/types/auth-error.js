'use strict';

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

var AuthErrorUserPwd = {
  message: '用户名或密码错',
  code: 1
};
var AuthErrorUserLock = {
  message: '用户被锁定',
  code: 2
};
var AuthErrorPwd = {
  message: '密码错误',
  code: 3
};
var AuthErrorAlreadyLogin = {
  message: '用户已登录',
  code: 4
};
var AuthErrorUserDisabled = {
  message: '用户已被禁用',
  code: 5
};
var AuthErrorInvalidAccessToken = {
  message: '不合法的访问令牌',
  code: 6
};
var AuthErrorInvalidUserToken = {
  message: '不合法的用户令牌',
  code: 7
};
var AuthErrorNoPermission = {
  message: '没有权限进行此操作',
  code: 8
};
var AuthErrorUserTokenExpired = {
  message: '用户令牌已过期',
  code: 9
};
var AuthErrorNoSystem = {
  message: '没有权限使用此系统',
  code: 10
};

var AuthError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(AuthError, _Error);

  var _super = _createSuper(AuthError);

  function AuthError(obj) {
    var _this;

    (0, _classCallCheck2["default"])(this, AuthError);
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

  (0, _createClass2["default"])(AuthError, null, [{
    key: "userPwdError",
    value: function userPwdError() {
      return new AuthError(AuthErrorUserPwd);
    }
  }, {
    key: "userLockError",
    value: function userLockError() {
      return new AuthError(AuthErrorUserLock);
    }
  }, {
    key: "pwdError",
    value: function pwdError() {
      return new AuthError(AuthErrorPwd);
    }
  }, {
    key: "alreadyLoginError",
    value: function alreadyLoginError() {
      return new AuthError(AuthErrorAlreadyLogin);
    }
  }, {
    key: "userDisabledError",
    value: function userDisabledError() {
      return new AuthError(AuthErrorUserDisabled);
    }
  }, {
    key: "invalidAccessToken",
    value: function invalidAccessToken() {
      return new AuthError(AuthErrorInvalidAccessToken);
    }
  }, {
    key: "invalidUserToken",
    value: function invalidUserToken() {
      return new AuthError(AuthErrorInvalidUserToken);
    }
  }, {
    key: "noPermission",
    value: function noPermission() {
      return new AuthError(AuthErrorNoPermission);
    }
  }, {
    key: "userTokenExpired",
    value: function userTokenExpired() {
      return new AuthError(AuthErrorUserTokenExpired);
    }
  }, {
    key: "noSystem",
    value: function noSystem() {
      return new AuthError(AuthErrorNoSystem);
    }
  }]);
  return AuthError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = AuthError;