export class CodeMap {
    name: string;
    value: any;

    constructor(name: string, value: any) {
        this.name = name;
        this.value = value;
    }

    static from(name: string, value: any): CodeMap {
        return new CodeMap(name, value);
    }
}