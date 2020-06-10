'use strict';

const AuthErrorUserPwd = {
    message: '用户名或密码错',
    code: 1
};

const AuthErrorUserLock = {
    message: '用户被锁定',
    code: 2
}

const AuthErrorPwd = {
    message: '密码错误',
    code: 3
}

const AuthErrorAlreadyLogin = {
    message: '用户已登录',
    code: 4
}

const AuthErrorUserDisabled = {
    message: '用户已被禁用',
    code: 5
}

const AuthErrorInvalidAccessToken = {
    message: '不合法的访问令牌',
    code: 6
}

const AuthErrorInvalidUserToken = {
    message: '不合法的用户令牌',
    code: 7
}

const AuthErrorNoPermission = {
    message: '没有权限进行此操作',
    code: 8
}

const AuthErrorUserTokenExpired = {
    message: '用户令牌已过期',
    code: 9
}

const AuthErrorNoSystem = {
    message: '没有权限使用此系统',
    code: 10
}


export default class AuthError extends Error {
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

    static userPwdError() {
        return new AuthError(AuthErrorUserPwd);
    }

    static userLockError() {
        return new AuthError(AuthErrorUserLock);
    }

    static pwdError() {
        return new AuthError(AuthErrorPwd);
    }

    static alreadyLoginError() {
        return new AuthError(AuthErrorAlreadyLogin);
    }

    static userDisabledError() {
        return new AuthError(AuthErrorUserDisabled);
    }

    static invalidAccessToken() {
        return new AuthError(AuthErrorInvalidAccessToken);
    }

    static invalidUserToken() {
        return new AuthError(AuthErrorInvalidUserToken);
    }

    static noPermission() {
        return new AuthError(AuthErrorNoPermission);
    }

    static userTokenExpired() {
        return new AuthError(AuthErrorUserTokenExpired);
    }

    static noSystem() {
        return new AuthError(AuthErrorNoSystem);
    }
}