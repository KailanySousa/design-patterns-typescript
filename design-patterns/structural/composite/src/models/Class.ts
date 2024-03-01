import IClass from "../interfaces/IClass";

export default class Class implements IClass {
    name: string;
    duration: number;

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
    }

    getName(): string {
        return this.name;
    }

    getDuration(): number {
        return this.duration;
    }

    getClass(): string {
       return `Content: ${this.getName()} \n Duration: ${this.getDuration}`;
    }

}