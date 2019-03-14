'use strict';
//this is for server process not for client
export default class RestQuery {
    constructor() {
        this.start = 0;
        this.limit = 0;
        this.sort = '';
        this.dir = 'ASC';
        this.keyword = '';
    }
}