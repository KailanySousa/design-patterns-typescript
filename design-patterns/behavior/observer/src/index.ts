import Client from "./observer/Client";
import AppleStore from "./stores/AppleStore";

const appleStore = new AppleStore();

const client1 = new Client('Cliente 1');
appleStore.addCustomerToNotificationPool(client1);

appleStore.notifyCustomers();

const client2 = new Client('Cliente 2');
appleStore.addCustomerToNotificationPool(client2);

appleStore.notifyCustomers();

appleStore.removeCustomerToNotificationPool(client1);
appleStore.notifyCustomers();