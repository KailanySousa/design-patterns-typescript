import IDrink from "../interfaces/IDrink";

export default class Coffe implements IDrink {
    
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    cost(): number {
        return 5;
    }
    
}