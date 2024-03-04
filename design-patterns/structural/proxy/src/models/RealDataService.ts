import IDataService from "../interfaces/IDataService";

export default class RealDataService implements IDataService {
    fetchData(): string {
        return "Dados reais do banco de dados";
    }
}