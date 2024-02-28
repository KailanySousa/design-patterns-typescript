import Personagem from "../template/Personagem";

export default class Guerreiro extends Personagem {
    protected luta() {
        console.log("luta extremamente bem");
    }

    protected magia() {
        console.log("não consegue usar magia")
    }
}