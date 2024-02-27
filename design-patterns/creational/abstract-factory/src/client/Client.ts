import IAircraft from "../vehicles/aerial/interfaces/IArcraft";
import Vehicle from "../consts/VehicleTypes";
import ITransportFactory from "../factorys/interfaces/ITransportFactory";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client {

    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }

    startRouteVehicle(): void {
        this.vehicle.startRoute();
    }

    startRouteAircraft(): void {
        this.aircraft.startRoute();
    }
}