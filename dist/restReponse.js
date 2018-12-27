'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RestResponse = function () {
    function RestResponse() {
        _classCallCheck(this, RestResponse);

        this.result = false;
        this.error_code = 0;
        this.error_msg = '';
        this.data = null;
        this.total_count = 0;
    }

    _createClass(RestResponse, null, [{
        key: 'NewBoolResponse',
        value: function NewBoolResponse(b, err) {
            var resp = new RestResponse();
            resp.result = b;
            if (err) {
                resp.error_msg = err.message;
            }
            resp.error_code = err.code || 0;
            return resp;
        }
    }, {
        key: 'NewDataResponse',
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