import Store from "./Store";

const instancia1 = Store.getInstance();
instancia1.pushData(1);
console.log(instancia1.getData());

// apesar de armazenada em uma nova variavel, a instancia ainda é a mesma
const instancia2 = Store.getInstance();
console.log(instancia2.getData());
