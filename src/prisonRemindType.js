/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonRemindType = {
    newEntryTalk: {
        name: '入所谈话',
        value: 0
    },
    transitionTalk: {
        name: '过度阶段谈话',
        value: 1
    },
    stateChangeTalk:{
        name:'环节变动谈话',
        value:2
    },
    patrol: {
        name: '巡视',
        value: 100
    }
};

Object.freeze(prisonRemindType);
export default prisonRemindType;