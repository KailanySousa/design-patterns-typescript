import IVehiclePrototype from "../interfaces/IVehiclePrototype";

export default abstract class BaseVehicle implements IVehiclePrototype {

    protected wheels: number;
    protected color: string

    abstract getVehicle(): IVehiclePrototype;
    abstract clone(): IVehiclePrototype;
}