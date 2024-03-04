import CategoryFlyweight from "./models/CategoryFlyweight";
import CategoryFlyweightFactory from "./models/CategoryFlyweightFactory";
import Product from "./models/Product";

const categoryFactory: CategoryFlyweightFactory = new CategoryFlyweightFactory();

const eletronicCategory1: CategoryFlyweight = categoryFactory.instance('Eletronico', 'produtos eletronicos');

const computer: Product = new Product('Computador', 1000, eletronicCategory1);

const eletronicCategory2: CategoryFlyweight = categoryFactory.instance('Eletronico', 'produtos eletronicos');
const phone: Product = new Product('Telefone', 900, eletronicCategory2);

console.log('instancia das categorias dos dois produtos são iguais?', computer.category === phone.category);
