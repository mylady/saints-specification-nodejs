'use strict';

export default class RestQuery {
    constructor() {
        this.Start = 0;
        this.Limit = 0;
        this.Sort = '';
        this.Direction = 'ASC';
        this.Search = '';
        this.Extra = {};
    }
}