import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process: { argv: string | string[]; };

let transport: Transport;

if (process.argv.includes('--uber')) {
    transport = new CarTransport();
} else if (process.argv.includes('--log')) {
    transport = new MotorcycleTransport();
} else {
    console.error('Informe o tipo de entrega');
}

if (transport) transport.startTransport();