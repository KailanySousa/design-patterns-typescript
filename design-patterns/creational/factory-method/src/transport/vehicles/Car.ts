import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log('Iniciando o trajeto do carro')
    }
    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos!');
    }

}