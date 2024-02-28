import IStrategy from "../interfaces/IStrategy";

export default class FacebookStrategy implements IStrategy {
    login(credentials: any): boolean {
       console.log("realizando login com facebook OAuth2");
       return true;
   }
}