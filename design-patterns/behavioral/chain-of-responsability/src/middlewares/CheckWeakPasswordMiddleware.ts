import Chalk from 'chalk';
import Middleware from './Middleware';

export default class CheckWeakPassword extends Middleware {

  public check(email: string, password: string): boolean {
  
    if (password === '123456') {
      console.log(Chalk.yellow('ATENÇÃO! Sua senha é fraca, considere alterar para uma mais forte'));
    }

    return this.checkNext(email, password);

  }

}
