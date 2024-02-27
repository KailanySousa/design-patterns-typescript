import IAircraft from "./interfaces/IArcraft";

export default class Airplane implements IAircraft {
    startRoute(): void {
        console.log('--- AVIÃO ---');
        this.checkWind();
        this.getCargo();
        console.log('iniciando a decolagem\n');
    }
    getCargo(): void {
        console.log('pegamos os passageiros, estamos prontos');
    }
    checkWind(): void {
        console.log('vento a 25km, ventos ok');
    }
    
}