/**
 * Created by MyLady on 16/3/29.
 */
'use strict';


function HospitalCall() {
    if (!(this instanceof HospitalCall)) {
        return new HospitalCall();
    }

    this.CallType = -1;
    this.CallContent = ''
}


module.exports = HospitalCall;