"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeMap = void 0;
class CodeMap {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    static from(name, value) {
        return new CodeMap(name, value);
    }
}
exports.CodeMap = CodeMap;
