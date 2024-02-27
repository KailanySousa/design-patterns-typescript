import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IArcraft";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

}