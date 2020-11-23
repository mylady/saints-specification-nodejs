'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RestResponse = /*#__PURE__*/function () {
  function RestResponse(_ref) {
    var result = _ref.result,
        err_code = _ref.err_code,
        err_msg = _ref.err_msg,
        data = _ref.data,
        total = _ref.total;
    (0, _classCallCheck2["default"])(this, RestResponse);
    this.result = result || false;
    this.err_code = err_code || 0;
    this.err_msg = err_msg || '';
    this.data = data || null;
    this.total = total || 0;
  }

  (0, _createClass2["default"])(RestResponse, null, [{
    key: "boolResponse",
    value: function boolResponse(b, err) {
      var resp = new RestResponse({
        result: b
      });

      if (err) {
        if (err instanceof String) {
          resp.err_msg = err;
        } else if (err instanceof Error) {
          resp.err_msg = err.message;
          resp.err_code = err.code || 0;
        }
      } else {
        resp.err_msg = '';
        resp.err_code = 0;
      }

      return resp;
    }
  }, {
    key: "dataResponse",
    value: function dataResponse(d, cnt) {
      var resp = new RestResponse({
        result: true,
        data: d,
        total: cnt
      });
      return resp;
    }
  }]);
  return RestResponse;
}();

exports["default"] = RestResponse;