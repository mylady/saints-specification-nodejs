/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonPatrolRecordStatus = {
    manageConfirm: {
        name: '待管教确认',
        value: 0
    },
    adminAudit: {
        name: '待领导审核',
        value: 1
    },
    finish:{
        name:'完成',
        value:2
    }
};

Object.freeze(prisonPatrolRecordStatus);
export default prisonPatrolRecordStatus;