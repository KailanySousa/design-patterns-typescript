export default class ParserHTML {
    private filePath: string;
    private htmlBuffer: string;

    constructor(filePath: string) {
        this.filePath = filePath;
        this.htmlBuffer = '';
    }

    public getHTMLFileFromPath() {
        console.log(`pegando o arquivo HTML do caminho indicado: ${this.filePath}`);

        return this; // retornando a própia instancia
    }

    public parseHTML() {
        console.log(`parseando o arquivo HTML ${this.filePath}`);

        return this.htmlBuffer;
    }
}