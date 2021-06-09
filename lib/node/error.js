"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecError = void 0;
class SpecError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.SpecError = SpecError;
