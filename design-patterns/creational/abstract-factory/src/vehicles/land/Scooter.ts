import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        console.log('--- PATINETE ---');
        this.getCargo();
        console.log('iniciando a entrega\n');
    }
    getCargo(): void {
        console.log('Pegamos a encomenda, estamos prontos');
    }
    
}