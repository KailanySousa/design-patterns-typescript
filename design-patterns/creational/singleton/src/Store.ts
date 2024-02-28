export default class Store {
    private static instance: Store;

    private data: any[] = [];

    public static getInstance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }

        return Store.instance;
    }

    public pushData(newData: any) {
        this.data.push(newData);
    }

    public getData() {
        return this.data;
    }
}