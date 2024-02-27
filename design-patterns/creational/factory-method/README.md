# Factory Method 
Padrão que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

## Problema

Neste caso, um sistema foi criado com o objetivo de realizar trajetos com dois veículos diferentes: carro e moto.
O foco ao utilizar o padrão Factory Method é fazer com que seja possível expandir o código, adicionando outros veículos sem alterar o ódigo existente.

## Solução

1. Para isso, foram criadas interfaces para cada tipo de veículo: aéreo e terrestre, levando em consideração que os veículos de cada grupo possuem os mesmos comportamentos.

2. Também foi criada uma interface para que cada companhia a implemente e levando em consideração que cada companhia trabalha com um veículo terrestre e um veículo aéreo, essa interface define comportamentos para criar esses veículos.

3. Cada companhia, que possui sua respectiva classe, é responsável por criar seus veículos, seja ele terrestre e/ou aéreo.

4. Por fim, a classe Client é responsável por iniciar a rota de acordo com o factory (companhia passada). Um adicional ao projeto foi dar a opção ao Client de iniciar a rota de apenas uma veículo ou iniciar de dois.

o problema a ser resolvido é fazer com que a aplicação não fique amarrada a uma única classe (por exemplo, Car) para que no futuro seja possível estender os recursos e aplicar novos meios de transportes que possuem suas próprias particularidades.

## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`
    * Sem passar nenhum argumento, no console será exibida a seguinte mensagem: `Informe o tipo de entrega`
    * Execute `npm run dev -- --uber` para que as implementações específicas para carros sejam executadas
    * Execute `npm run dev -- --log` para que as implementações específicas para motos sejam executadas
    * Execute `npm run dev -- --eats` para que as implementações específicas para bicicletas sejam executadas