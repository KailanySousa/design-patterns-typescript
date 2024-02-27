# Abstract Factory 

[Em construção]

## Exemplo aplicado

[Em construção]

## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`
    * Sem passar nenhum argumento, no console será exibida a seguinte mensagem: `Companhia não informada`
* Para executar com determinada companhia basta informar o primeiro argumento: `npm run dev -- company`. Substitua company por um dos seguintes valores:
        * `--u` para Uber
        * `--nn` para 99
        * `--l` para Lime
* Para exexcutar com determinada companhia e tipo de veículo basta informar o segundo parametro: `npm run dev -- --company vehicleType`. Substitua company por um dos valores válidos e vehicleType por um dos seguintes valores:
    * `--aerial` para veículos aéreos. Avião, helicóptero ou drone, a depender da companhia escolhida
    * `--land` para veículos terrestres. Carro, moto ou patinete, a depender da companhia escolhida