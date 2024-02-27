import IAircraft from "./interfaces/IArcraft";

export default class Helicopter implements IAircraft {
    startRoute(): void {
        console.log('--- HELICÉPTERO ---');
        this.checkWind();
        this.getCargo();
        console.log('iniciando a decolagem\n');
    }
    getCargo(): void {
        console.log('passageiros ok, ligando hélices');
    }
    checkWind(): void {
        console.log('vento a 25km, sudeste, ventos ok');
    }
    
}