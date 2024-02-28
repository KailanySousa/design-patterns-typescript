import CarTrunk from "./enums/CarTrunk";
import Handlebar from "./enums/Handlebar";
import IVehiclePrototype from "./interfaces/IVehiclePrototype";
import { Car } from "./vehicles/Car";
import { Motorcycle } from "./vehicles/Motorcycle";

// criando modelo de carro vermelho com porta malas grande
const carModel: Car = new Car(CarTrunk.LARGE, 4, 'red');

// quero produzir 2 carros desse mesmo modelo
const vehicles: IVehiclePrototype[] = [];
let produced = 0;

while (produced < 2) {
    const newCar = carModel.clone();
    vehicles.push(newCar) ; 
    produced++;
}

// criando modelo de moto azul com guidão baixo
const motorcycleModel: Motorcycle = new Motorcycle(Handlebar.LOW, 2, 'blue');

// quero produzir 2 motos desse mesmo modelo
produced = 0;

while (produced < 2) {
    const newMotorcycle = motorcycleModel.clone();
    vehicles.push(newMotorcycle) ; 
    produced++;
}

console.log('Veiculos produzidos ', vehicles);