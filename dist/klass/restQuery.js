'use strict'; //this is for server process not for client

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RestQuery = function RestQuery() {
  _classCallCheck(this, RestQuery);

  this.start = 0;
  this.limit = 0;
  this.sort = '';
  this.dir = 'ASC';
  this.keyword = '';
};

exports.default = RestQuery;