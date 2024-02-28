import IObserver from "./IObserver";

export default interface IStore {
    addCustomerToNotificationPool(observer: IObserver): void;
    removeCustomerToNotificationPool(observer: IObserver): void;
    notifyCustomers(): void;
}