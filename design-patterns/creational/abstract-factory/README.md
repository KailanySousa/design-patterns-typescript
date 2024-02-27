# Abstract Factory 

[Em construção]

## Exemplo aplicado

Neste exemplo, o problema a ser resolvido é evoluir a aplicação desenvolvida na seção Factory Method para que além de ter tipos diferentes de veículos, exista também tipos diferentes de clientes. Levando em consideração que nada do que já está implementado pare de funcionar.

## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`
    * Sem passar nenhum argumento, no console será exibida a seguinte mensagem: `Informe o tipo de entrega`
    * Execute `npm run dev -- --uber` para que as implementações específicas para carros sejam executadas
    * Execute `npm run dev -- --log` para que as implementações específicas para motos sejam executadas
    * Execute `npm run dev -- --eats` para que as implementações específicas para bicicletas sejam executadas