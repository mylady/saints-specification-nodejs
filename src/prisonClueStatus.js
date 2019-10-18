/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonClueStatus = {
    submit: {
        name: '待所领导确认',
        value: 0
    },
    confirmed: {
        name: '通过',
        value: 1
    },
    rejected:{
        name:'不通过',
        value:2
    }
};

Object.freeze(prisonClueStatus);
export default prisonClueStatus;