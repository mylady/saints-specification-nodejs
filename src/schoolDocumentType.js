'use strict';

let schoolDocumentType = {
    law: {
        name: '法律法规',
        value: 0
    },
    regulation: {
        name: '学校规定',
        value: 1
    },
    presolution: {
        name: '安全预案',
        value: 2
    }
};

Object.freeze(schoolDocumentType);
export default schoolDocumentType;