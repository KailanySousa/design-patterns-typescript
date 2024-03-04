import ICategory from "./ICategory";

export default interface IProduct {
    
    get product(): IProduct;
    get name(): string;
    get price(): number;
    get category(): ICategory;
}