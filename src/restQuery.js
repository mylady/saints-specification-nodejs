'use strict';

export default class RestQuery {
    constructor() {
        this.Start = 0;
        this.Limit = 0;
        this.Sort = '';
        this.Direction = 'ASC';
        this.Search = '';

        const start = 'start';
        const limit = 'limit';
        const sort = 'sort';
        const direction = 'dir';
        const search = 'keyword';
    }
}