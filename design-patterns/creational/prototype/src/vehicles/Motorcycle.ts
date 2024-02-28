import BaseCar from "../bases/BaseVehicle";
import Handlebar from "../enums/Handlebar";
import IVehiclePrototype from "../interfaces/IVehiclePrototype";
import ICarPrototype from "../interfaces/IVehiclePrototype";

export class Motorcycle extends BaseCar {

    private handlebar: Handlebar;

    constructor(
        handlebar: Handlebar,
        wheels: number,
        color: string
    ) {
        super();
        this.handlebar = handlebar;
        this.wheels = wheels;
        this.color = color;
    }

    getVehicle(): IVehiclePrototype {
        return this;
    }

    clone(): ICarPrototype {
        return new Motorcycle(this.handlebar, this.wheels, this.color);
    }
}