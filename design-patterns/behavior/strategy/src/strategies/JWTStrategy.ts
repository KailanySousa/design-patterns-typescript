import IStrategy from "../interfaces/IStrategy";

export default class JWTStrategy implements IStrategy {
    login(credentials: any): boolean {
        console.log("realizando login com JWT");
        return true;
    }
}