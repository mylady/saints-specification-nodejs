'use strict'; //for backend service message exchange

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var InternalMessage =
/*#__PURE__*/
function () {
  function InternalMessage(_ref) {
    var type = _ref.type,
        content = _ref.content;
    (0, _classCallCheck2.default)(this, InternalMessage);
    this.internal_type = type || 0;
    this.message_content = content || '';
  }

  (0, _createClass2.default)(InternalMessage, null, [{
    key: "checkValid",
    value: function checkValid(message) {
      return message.hasOwnProperty('message_content') && message.hasOwnProperty('internal_type');
    }
  }]);
  return InternalMessage;
}();

exports.default = InternalMessage;