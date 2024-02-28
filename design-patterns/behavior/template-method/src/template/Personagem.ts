export default abstract class Personagem {

    templateMethod(){
        this.anda();
        this.respira();
        this.luta();
        this.magia();
    };

    // esqueleto dos algoritmos

    // comportamento que podem ser ou não sobrescritos
    protected anda() {
        console.log("anda normalmente");
    };
    protected respira() {
        console.log("respira normalmente");
    };

    // comportamentos que vão ser definidos nas classes que extendem a abstração
    protected abstract magia(): void;
    protected abstract luta(): void;

}