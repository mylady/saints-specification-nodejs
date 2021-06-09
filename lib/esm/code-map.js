export class CodeMap {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    static from(name, value) {
        return new CodeMap(name, value);
    }
}
