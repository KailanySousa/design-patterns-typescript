import IStrategy from "../interfaces/IStrategy";

export default class Passport {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    // comportamento de login vai ser feito de acordo com a estrategia passada na instancia da classe Passport
    public login(credentials: any) {
        this.strategy.login(credentials);
    }
}