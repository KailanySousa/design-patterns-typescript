import ICategory from "../interfaces/ICategory";
import IProduct from "../interfaces/IProduct";
import CategoryFlyweight from "./CategoryFlyweight";

export default class Product implements IProduct {

    constructor(
        private _name: string,
        private _price: number,
        private _category: CategoryFlyweight)
    {}

    get product(): IProduct {
        return this;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get category(): CategoryFlyweight {
        return this._category;
    }
    
}