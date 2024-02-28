import Elfo from "./models/Elfo";
import Guerreiro from "./models/Guerreiro";
import Personagem from "./template/Personagem";

function jogo(personagem: Personagem) {
    personagem.templateMethod();
}

jogo(new Elfo());
jogo(new Guerreiro());