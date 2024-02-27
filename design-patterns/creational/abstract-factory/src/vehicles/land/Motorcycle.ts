import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
    startRoute(): void {
        console.log('--- MOTO ---');
        this.getCargo();
        console.log('iniciando a entrega\n');
    }

    getCargo(): void {
        console.log('Pegamos a encomenda, estamos prontos');
    }
}