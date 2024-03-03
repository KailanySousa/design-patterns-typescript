import BaseDecorator from "./BaseDecorator";

export default class MilkDecorator extends BaseDecorator {

    description: string = 'leite';

    cost(): number {
        return this.wrappee.cost() + 1;
    }

    showDescription(): string {
        return `${this.wrappee.description} com ${this.description}`;
    }
}