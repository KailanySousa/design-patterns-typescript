import IFlyweightFactory from "../interfaces/IFlyweightFactory";
import CategoryFlyweight from "./CategoryFlyweight";

export default class CategoryFlyweightFactory implements IFlyweightFactory<CategoryFlyweight> {
    private categories: { [key: string]: CategoryFlyweight } = {};

    instance(name: string, description: string): CategoryFlyweight {
        const key = name.toLowerCase();
        if (!this.categories[key]) {
            this.categories[key] = new CategoryFlyweight(name, description);
        }
        return this.categories[key];
    }

    allInstances(): CategoryFlyweight[] {
        return Object.values(this.categories);
    }
}