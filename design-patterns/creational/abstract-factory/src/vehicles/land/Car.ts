import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {

    startRoute(): void {
        console.log('--- CARRO ---');
        this.getCargo();
        console.log('iniciando o trajeto\n');
    }

    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos');
    }
    
}