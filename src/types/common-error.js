
const CommonErrorInvalidAccessToken = {
    message: '不合法的访问令牌',
    code: 0
}

export default class CommonError extends Error {
    constructor(obj) {
        super();
        if (obj.hasOwnProperty('message') && obj.hasOwnProperty('code')) {
            this.message = obj.message;
            this.code = obj.code;
        } else {
            this.message = '';
            this.code = 0;
        }
    }

    static invalidAccessToken() {
        return new CommonError(CommonErrorInvalidAccessToken);
    }
}