'use strict'; //for backend service message exchange

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var InternalMessage = /*#__PURE__*/function () {
  function InternalMessage(_ref) {
    var internal_type = _ref.internal_type,
        message_content = _ref.message_content;
    (0, _classCallCheck2["default"])(this, InternalMessage);
    this.internal_type = internal_type || 0;
    this.message_content = message_content || '';
  }

  (0, _createClass2["default"])(InternalMessage, null, [{
    key: "isValid",
    value: function isValid(message) {
      return message.hasOwnProperty('message_content') && message.hasOwnProperty('internal_type');
    }
  }]);
  return InternalMessage;
}();

exports["default"] = InternalMessage;