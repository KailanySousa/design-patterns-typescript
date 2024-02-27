import IAircraft from "../../aerial/interfaces/IArcraft";
import ILandVehicle from "../../land/interfaces/ILandVehicle";

export default interface ITransportFactory {
    createTransportVehicle():ILandVehicle;
    createTransportAircraft(): IAircraft;
}