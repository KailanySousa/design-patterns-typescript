import BaseDecorator from "./BaseDecorator";

export default class ChantilyDecorator extends BaseDecorator {

    description: string = 'Chantilly';
    
    cost(): number {
        return this.wrappee.cost() + 2;
    }

    showDescription(): string {
        return `${this.wrappee.description} com ${this.description}`
    }
}