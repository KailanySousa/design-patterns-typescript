import IDrink from "../interfaces/IDrink";

export default abstract class BaseDecorator implements IDrink {
    description: string;
    constructor(protected wrappee: IDrink) {}
    abstract cost(): number;
    abstract showDescription(): string;
}