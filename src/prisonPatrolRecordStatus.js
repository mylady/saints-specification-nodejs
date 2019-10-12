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
        name: '待中队长审核',
        value: 1
    },
    finish:{
        name:'完成',
        value:2
    }
};

Object.freeze(prisonPatrolRecordStatus);
export default prisonPatrolRecordStatus;