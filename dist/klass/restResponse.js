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
  function RestResponse() {
    (0, _classCallCheck2.default)(this, RestResponse);
    this.result = false;
    this.error_code = 0;
    this.error_msg = '';
    this.data = null;
    this.total_count = 0;
  }

  (0, _createClass2.default)(RestResponse, null, [{
    key: "NewBoolResponse",
    value: function NewBoolResponse(b, err) {
      var resp = new RestResponse();
      resp.result = b;

      if (err) {
        resp.error_msg = err.message;
        resp.error_code = err.code || 0;
      } else {
        resp.error_msg = '';
        resp.error_code = 0;
      }

      resp.data = null;
      resp.total_count = 0;
      return resp;
    }
  }, {
    key: "NewDataResponse",
    value: function NewDataResponse(d, cnt) {
      var resp = new RestResponse();
      resp.result = true;
      resp.data = d;
      resp.total_count = cnt;
      return resp;
    }
  }]);
  return RestResponse;
}();

exports.default = RestResponse;