import Personagem from "../template/Personagem";

export default class Elfo extends Personagem {
    protected anda() {
        console.log("corre muito");
    };

    protected luta() {
        console.log("luta extremamente bem");
    }

    protected magia() {
        console.log("consegue usar magia")
    }
}