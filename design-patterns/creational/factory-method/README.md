# Factory Method 
Neste padrão, as chamadas diretas (new) de construção de objetos da classe são substituidas por um método intermediário que fará o papel de **fábrica**.

Este método fábrica (Factory Method), será responsável por controlar como criar os objetos que estendem a sua classe que serão instanciados. Os objetos retornados pelos método são chamados **produtos** ou **Classes Concretas**.

## Exemplo aplicado

Neste exemplo, o problema a ser resolvido é fazer com que a aplicação não fique amarrada a uma única classe (por exemplo, Car) para que no futuro seja possível estender os recursos e aplicar novos meios de transportes que possuem suas próprias particularidades.

## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`
    * Sem passar nenhum argumento, no console será exibida a seguinte mensagem: `Informe o tipo de entrega`
    * Execute `npm run dev -- --uber` para que as implementações específicas para carros sejam executadas
    * Execute `npm run dev -- --log` para que as implementações específicas para motos sejam executadas
    * Execute `npm run dev -- --eats` para que as implementações específicas para bicicletas sejam executadas