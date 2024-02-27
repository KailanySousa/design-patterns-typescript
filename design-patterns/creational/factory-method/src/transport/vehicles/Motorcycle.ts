import IVehicle from "./interfaces/IVehicle";

export default class Motorcyle implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log('Iniciando o trajeto da entrega')
    }

    getCargo(): void {
        console.log('Pegamos a encomenda, estamos prontos!');
    }

}