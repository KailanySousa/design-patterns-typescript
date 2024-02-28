import Chalk from "chalk"
import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {

    public check(email: string, password: string): boolean {
        
        const users = DataBase.filter(item => item.email === email);

        if (!users.length) {
            console.log(Chalk.red("E-mail não cadastrado."));
            return false;
        }

        if (users[0].permission === PermissionType.ADMIN) {
            console.log(Chalk.blue("Seja bem-vindo administrador!"));
            return true;
        }
        
        console.log(Chalk.blue("Seja bem-vindo usuário!"));

        return this.checkNext(email, password);

    }    

}