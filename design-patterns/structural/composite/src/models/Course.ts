import IClass from "../interfaces/IClass";

export default class Course implements IClass {

    name: string;
    contents: IClass[];
    size: number;

    constructor(name: string) {
        this.name = name;
        this.size = 0;
        this.contents = [];
    }

    getName(): string {
        return this.name;
    }

    getDuration(): number {
        return this.size;
    }

    getClass(): string {
        return `\n Course: ${this.getName()}\n Duration Total: ${this.getDuration()} hours \n Content Total: ${this.contents.length}`;

    }

    addContent(content: IClass): void {
        this.contents.push(content);
        this.size =+ content.getDuration();
    }

}