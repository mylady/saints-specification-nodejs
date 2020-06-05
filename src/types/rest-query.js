'use strict';
//this is for server process not for client
export default class RestQuery {
    constructor({ start, limit, sort, dir, keyword }) {
        this.start = start || 0;
        this.limit = limit || 0;
        this.sort = sort || '';
        this.dir = dir || 'asc';
        this.keyword = keyword || '';
    }
}