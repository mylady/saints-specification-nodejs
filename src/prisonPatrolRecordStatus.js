/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonPatrolRecordStatus = {
    commit: {
        name: '提交',
        value: 0
    },
    appeal: {
        name: '申诉',
        value: 1
    },
    audit:{
        name:'审核',
        value:2
    }
};

Object.freeze(prisonPatrolRecordStatus);
export default prisonPatrolRecordStatus;