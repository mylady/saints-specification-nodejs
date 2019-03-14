'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RestResponse =
/*#__PURE__*/
function () {
  function RestResponse() {
    _classCallCheck(this, RestResponse);

    this.result = false;
    this.error_code = 0;
    this.error_msg = '';
    this.data = null;
    this.total_count = 0;
  }

  _createClass(RestResponse, null, [{
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