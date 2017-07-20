/**
 * Created by wulei on 17-5-5.
 */
'use strict';

let digitalTerminalType = {
    infopubTerminal: {
        name: '信息发布终端',
        value: 0
    },
    iptvTerminal: {
        name: '数字电视终端',
        value: 1
    },
    ledScreen: {
        name: '电子显示屏',
        value: 2
    }
};

Object.freeze(digitalTerminalType);
export default digitalTerminalType;
