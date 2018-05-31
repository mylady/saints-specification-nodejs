'use strict';
//this is for server process not for client

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
};

exports.default = RestQuery;