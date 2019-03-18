'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RestResponse =
/*#__PURE__*/
function () {
  function RestResponse(_ref) {
    var result = _ref.result,
        error_code = _ref.error_code,
        error_msg = _ref.error_msg,
        data = _ref.data,
        total_count = _ref.total_count;
    (0, _classCallCheck2.default)(this, RestResponse);
    this.result = result || false;
    this.error_code = error_code || 0;
    this.error_msg = error_msg || '';
    this.data = data || null;
    this.total_count = total_count || 0;
  }

  (0, _createClass2.default)(RestResponse, null, [{
    key: "NewBoolResponse",
    value: function NewBoolResponse(b, err) {
      var resp = new RestResponse({
        result: b
      });

      if (err) {
        resp.error_msg = err.message;
        resp.error_code = err.code || 0;
      } else {
        resp.error_msg = '';
        resp.error_code = 0;
      }

      return resp;
    }
  }, {
    key: "NewDataResponse",
    value: function NewDataResponse(d, cnt) {
      var resp = new RestResponse({
        result: true,
        data: d,
        total_count: cnt
      });
      return resp;
    }
  }]);
  return RestResponse;
}();

exports.default = RestResponse;