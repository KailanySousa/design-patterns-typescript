import ICategory from "../interfaces/ICategory";

export default class CategoryFlyweight implements ICategory {

    constructor(private _name: string, private _description: string){}

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

}