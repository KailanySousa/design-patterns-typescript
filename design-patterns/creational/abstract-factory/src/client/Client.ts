import IAircraft from "../vehicles/aerial/interfaces/IArcraft";
import Vehicle from "../consts/VehicleTypes";
import ITransportFactory from "../factorys/interfaces/ITransportFactory";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import VehicleTypes from "../consts/VehicleTypes";

export default class Client {

    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(vehicleType: string[]): void {
        if (vehicleType.includes(VehicleTypes.AERIAL)) {
            this.startRouteAircraft();
        } else if (vehicleType.includes(VehicleTypes.LAND)) {
            this.startRouteVehicle();
        } else {
            this.startRouteVehicle();
            this.startRouteAircraft();
        }
    }

    startRouteVehicle(): void {
        this.vehicle.startRoute();
    }

    startRouteAircraft(): void {
        this.aircraft.startRoute();
    }
}