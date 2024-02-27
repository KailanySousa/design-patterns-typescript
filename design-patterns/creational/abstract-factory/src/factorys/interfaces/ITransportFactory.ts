import IAircraft from "../../vehicles/aerial/interfaces/IArcraft";
import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicle";

export default interface ITransportFactory {
    createTransportVehicle():ILandVehicle;
    createTransportAircraft(): IAircraft;
}