import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log('Iniciando o trajeto da bicicleta')
    }
    getCargo(): void {
        console.log('Pegamos a comida, estamos prontos!');
    }

}