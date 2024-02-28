export default class HTMLToPDFConverter {
    private htmlBuffer: string;

    constructor(htmlBuffer: string){
        this.htmlBuffer = htmlBuffer;
    }

    public convert() {
        console.log(`arquivo convertido com sucesso`);

        return this.htmlBuffer;
    }
}