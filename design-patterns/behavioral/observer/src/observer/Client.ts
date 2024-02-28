import IObserver from "../interfaces/IObserver";

export default class Client implements IObserver {

    constructor(private _nome: string){}

    update(): void {
        console.log(`${this._nome} recebeu a notificação de lançamento`);
    }
}