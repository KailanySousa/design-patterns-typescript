import IDataService from "../interfaces/IDataService";
import RealDataService from "./RealDataService";

export default class DataServiceProxy implements IDataService {
    private realDataService: RealDataService;
    private cache: string | null = null;

    constructor(realDataService: RealDataService) {
        this.realDataService = realDataService;
    }

    fetchData(): string {
        if (this.cache) {
            console.log("Retornando dados do cache...");
            return this.cache;
        }

        const realData = this.realDataService.fetchData();
        
        this.cache = realData;

        return realData;
    }
}