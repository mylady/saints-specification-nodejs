/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonPatrolRecordStatus = {
    manageConfirm: {
        name: '待民警确认',
        value: 0
    },
    adminAudit: {
        name: '待中队长审核',
        value: 1
    },
    adminAudit: {
        name: '待所领导审核',
        value: 2
    },
    finish: {
        name: '完成',
        value: 3
    }
};

Object.freeze(prisonPatrolRecordStatus);
export default prisonPatrolRecordStatus;