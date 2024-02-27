import Client from "./client/Client";
import Company from "./consts/Company";
import VehicleTypes from "./consts/VehicleTypes";
import LimeTransport from "./factorys/LimeTransport";
import NineNineTransport from "./factorys/NineNineTransport";
import UberTransport from "./factorys/UberTransport";
import ITransportFactory from "./factorys/interfaces/ITransportFactory";

declare var process: { argv: string | string[]; };
let factory: ITransportFactory;

if (process.argv.includes(Company.UBER)) {
    factory = new UberTransport();
} else if (process.argv.includes(Company.NINENINE)) {
    factory = new NineNineTransport();
} else if (process.argv.includes(Company.LIME)) {
    factory = new LimeTransport();
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