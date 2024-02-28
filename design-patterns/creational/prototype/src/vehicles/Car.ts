import BaseCar from "../bases/BaseVehicle";
import CarTrunk from "../enums/CarTrunk";
import IVehiclePrototype from "../interfaces/IVehiclePrototype";
import ICarPrototype from "../interfaces/IVehiclePrototype";

export class Car extends BaseCar {

    private carTrunk: CarTrunk;

    constructor(
        carTrunk: CarTrunk,
        wheels: number,
        color: string
    ) {
        super();
        this.carTrunk = carTrunk;
        this.wheels = wheels;
        this.color = color;
    }

    getVehicle(): IVehiclePrototype {
        return this;
    }

    clone(): ICarPrototype {
        return new Car(this.carTrunk, this.wheels, this.color);
    }
}