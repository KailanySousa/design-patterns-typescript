import HTMLToPDFConverter from "./converter/HTMLToPDFConverter";
import ParserHTML from "./parser/ParserHTML";

export default class ConverterFacade {
    public convert(htmlPath: string) {
        const parseHTML = new ParserHTML(htmlPath);
        const htmlBuffer = parseHTML
            .getHTMLFileFromPath()
            .parseHTML();
        
        const htmlToPdfConverter = new HTMLToPDFConverter(htmlBuffer);

        return htmlToPdfConverter.convert();
    }
}