export default interface IStrategy {
    login(credentials: any): boolean;
}