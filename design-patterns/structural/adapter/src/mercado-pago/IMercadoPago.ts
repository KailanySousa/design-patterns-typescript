import Token from "../utils/Token";

export default interface IMercadoPago {

    buscarToken(): Token;
    enviarPagamento(): void;
    receberPagamento(): void;

}