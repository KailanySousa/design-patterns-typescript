import IObserver from "../interfaces/IObserver";
import IStore from "../interfaces/IStore";

export default class AppleStore implements IStore {
    private observers: IObserver[] = [];

    public addCustomerToNotificationPool(observer: IObserver): void {
        this.observers.push(observer);
    }

    public removeCustomerToNotificationPool(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);

        if(observerIndex < 0) {
            throw new Error("Observer não encontrado");
        }

        this.observers.splice(observerIndex, 1);
    }

    public notifyCustomers(): void {
        for(const obs of this.observers) {
            obs.update();
        }
    }
}