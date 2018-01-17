'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RestQuery = function RestQuery() {
    _classCallCheck(this, RestQuery);

    this.Start = 0;
    this.Limit = 0;
    this.Sort = '';
    this.Direction = 'ASC';
    this.Search = '';

    var start = 'start';
    var limit = 'limit';
    var sort = 'sort';
    var direction = 'dir';
    var search = 'keyword';
};

exports.default = RestQuery;