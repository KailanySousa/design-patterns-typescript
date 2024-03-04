import DataServiceProxy from "./models/DataServiceProxy";
import RealDataService from "./models/RealDataService";

const realDataService = new RealDataService();
const dataServiceProxy = new DataServiceProxy(realDataService);

// Primeira chamada (dados não estão em cache)
console.log(dataServiceProxy.fetchData());

// Segunda chamada (dados são retornados do cache)
console.log(dataServiceProxy.fetchData());