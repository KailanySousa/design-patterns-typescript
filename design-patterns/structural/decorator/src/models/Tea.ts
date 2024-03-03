import IDrink from "../interfaces/IDrink";

export default class Tea implements IDrink {
    
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    cost(): number {
        return 3;
    }
    
}