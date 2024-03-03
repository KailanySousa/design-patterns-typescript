import ChantilyDecorator from "./decorators/ChantilyDecorator";
import MilkDecorator from "./decorators/MilkDecorator";
import Coffe from "./models/Coffe";
import Tea from "./models/Tea";

const coffe = new Coffe('Café gelado');
const coffeWithMilk = new MilkDecorator(coffe);

console.log(coffe.description, coffe.cost());
console.log(coffeWithMilk.showDescription(), coffeWithMilk.cost());

const tea = new Tea('Chá de camomila');
const teaWithChantilly = new ChantilyDecorator(tea);

console.log(tea.description, tea.cost());
console.log(teaWithChantilly.showDescription(), teaWithChantilly.cost());