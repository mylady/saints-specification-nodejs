'use strict'; //for biz message exchange

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TransmitMessage =
/*#__PURE__*/
function () {
  function TransmitMessage(_ref) {
    var message_type = _ref.message_type,
        messge_content = _ref.messge_content,
        socket_io_id = _ref.socket_io_id;
    (0, _classCallCheck2.default)(this, TransmitMessage);
    this.message_type = message_type || 0;
    this.message_content = messge_content || '';
    this.socket_io_id = socket_io_id || '';
  }

  (0, _createClass2.default)(TransmitMessage, null, [{
    key: "isValid",
    value: function isValid(message) {
      return message.hasOwnProperty('message_content') && message.hasOwnProperty('message_type') && message.hasOwnProperty('socket_io_id');
    }
  }, {
    key: "isSocketIO",
    value: function isSocketIO(message) {
      return message.hasOwnProperty('socket_io_id') && message.socket_io_id;
    }
  }]);
  return TransmitMessage;
}();

exports.default = TransmitMessage;