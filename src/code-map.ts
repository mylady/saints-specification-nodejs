export class CodeMap {
    name: string;
    value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }

    static from(name: string, value: string): CodeMap {
        return new CodeMap(name, value);
    }
}