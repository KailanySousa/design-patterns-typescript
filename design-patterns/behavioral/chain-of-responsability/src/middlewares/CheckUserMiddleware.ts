import Chalk from 'chalk';
import DataBase from '../servers/DataBase';
import Middleware from './Middleware';

export default class CheckUserMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    if (email.indexOf('@') === -1) {
      console.log(Chalk.red('E-mail inválido!'));
      return false;
    }

    if (
      !DataBase.filter(
        item => item.email === email && item.password === password
      ).length
    ) {
      console.log(Chalk.red('E-mail e/ou Senha inválidos!'));
      return false;
    }

    return this.checkNext(email, password);

  }

}
