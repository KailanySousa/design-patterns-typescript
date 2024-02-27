import IAircraft from "./interfaces/IArcraft";

export default class Drone implements IAircraft {
    
    startRoute(): void {
        console.log('--- DRONE ---');
        this.getCargo();
        console.log('iniciando a entrega\n');
    }
    getCargo(): void {
        console.log('Pegamos a encomenda, estamos prontos');
    }
    
    checkWind(): void {
        console.log('vento a 25km, ventos ok');
    }
}