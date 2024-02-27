import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import VehicleTypes from "./vehicles/consts/VehicleTypes";
import NineNineTransport from "./vehicles/factorys/NineNineTransport";
import UberTransport from "./vehicles/factorys/UberTransport";
import ITransportFactory from "./vehicles/factorys/interfaces/ITransportFactory";

declare var process: { argv: string | string[]; };
let factory: ITransportFactory;

if (process.argv.includes(Company.UBER)) {
    factory = new UberTransport();
} else if (process.argv.includes(Company.NINENINE)) {
    factory = new NineNineTransport();
} else {
    console.error('Companhia não informada');
}

const client = new Client(factory);

if (process.argv.includes(VehicleTypes.AERIAL)) {
    client.startRouteAircraft();
} else if (process.argv.includes(VehicleTypes.LAND)) {
    client.startRouteVehicle();
} else {
    client.startRoute();
}