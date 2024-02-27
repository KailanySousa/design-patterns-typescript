# Abstract Factory 

Padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas. Além de possui uma hierarquia que encapsula: muitas famílias possívels e a construção de um conjuntos de produtos.

## Problema

Neste caso, um sistema foi criado com o objetivo de realizar um trajeto com duas familias de veiculos: aéreos e terrestres.
Na familia de veículos aéreos temos: avião, helicóptero e drone. Já na familia de veículos terrestres temos: carro, moto e patinete.

Também existem companhias que realizam duas opções de trajeto, um utilizando veículo aéreo e outro utilizando veículo terrestre, com a diferença dos veículos que são utilizados.
    * Uber: utiliza carro e avião
    * 99: utiliza moto e helicóptero 
    * Lime: utiliza patinete e drone

O foco ao utilizar o padrão Abstract Factory é fazer com que seja possível expandir o código, adicionando novas companhia e tipos de veículos sem alterar o ódigo existente.

## Solução

1. Para isso, foram criadas interfaces para cada tipo de veículo: aéreo e terrestre, levando em consideração que os veículos de cada grupo possuem os mesmos comportamentos.

2. Também foi criada uma interface para que cada companhia a implemente e levando em consideração que cada companhia trabalha com um veículo terrestre e um veículo aéreo, essa interface define comportamentos para criar esses veículos.

3. Cada companhia, que possui sua respectiva classe, é responsável por criar seus veículos, seja ele terrestre e/ou aéreo.

4. Por fim, a classe Client é responsável por iniciar a rota de acordo com o factory (companhia passada). Um adicional ao projeto foi dar a opção ao Client de iniciar a rota de apenas uma veículo ou iniciar de dois.


## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`
    * Sem passar nenhum argumento, no console será exibida a seguinte mensagem: `Companhia não informada`
* Para executar com determinada companhia basta informar o primeiro argumento: `npm run dev -- company`. Substitua company por um dos seguintes valores:
        * `--u` para Uber
        * `--nn` para 99
        * `--l` para Lime
* Para exexcutar com determinada companhia e tipo de veículo basta informar o segundo parametro: `npm run dev -- company vehicleType`. Substitua company por um dos valores válidos e vehicleType por um dos seguintes valores:
    * `--aerial` para veículos aéreos. Avião, helicóptero ou drone, a depender da companhia escolhida
    * `--land` para veículos terrestres. Carro, moto ou patinete, a depender da companhia escolhida