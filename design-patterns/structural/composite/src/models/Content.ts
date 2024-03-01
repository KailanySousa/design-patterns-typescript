import IClass from "../interfaces/IClass";

export default class Content implements IClass {
    name: string;
    duration: number;
    classList: IClass[];

    constructor(name: string, classList: IClass[]) {
        this.name = name;
        this.duration = classList.reduce((accumulator: number, currentItem: IClass) => {
            return accumulator + currentItem.getDuration();
        }, 0);
        this.classList = classList;
    }

    getName(): string {
        return this.name;
    }

    getDuration(): number {
        return this.duration;
    }

    getClass(): string {
       return `Content: ${this.getName()}\n Duration: ${this.getDuration()} hours \n Class Total: ${this.classList.length}`;
    }

    addClass(classList:  IClass): void {
        this.classList.push(classList);
        this.duration =+ classList.getDuration();
    }
    
}