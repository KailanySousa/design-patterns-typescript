import * as readline from "readline";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Middleware from "./middlewares/Middleware";
import Server from "./servers/Server";
import CheckWeakPassword from "./middlewares/CheckWeakPasswordMiddleware";

declare var process;

const server: Server = new Server();

function setPromptQuestions() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    rl.question("Digite o seu e-mail:", (email) => {
    
        rl.question("Digite a sua senha:", password => {
    
            server.logIn(email, password);
    
            rl.close();
    
        });
    
    });
    
    rl.on("close", () => {
    
        setPromptQuestions();
    
    });

}

const middleware: Middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckWeakPassword());

server.setMiddleware(middleware);

setPromptQuestions();