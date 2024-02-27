# Factory Method 
Neste padrão, as chamadas diretas (new) de construção de objetos da classe são substituidas por um método intermediário que fará o papel de **fábrica**.

Este método fábrica (Factory Method), será responsável por controlar como criar os objetos que estendem a sua classe que serão instanciados. Os objetos retornados pelos método são chamados **produtos** ou **Classes Concretas**.

## Exemplo aplicado

Neste exemplo, o problema a ser resolvido é fazer com que a aplicação não fique amarrada a uma única classe (por exemplo, Car) para que no futuro seja possível estender os recursos e aplicar novos meios de transportes que possuem suas próprias particularidades. 

Para isso, temos o IVehicle como uma interface dos produtos (ou como mencionado anteriomente, Classes Concretas), Car e Motorcycle (que implemetam essa interface), que são os tipos de veiculos disponiveis no sistema e que possuem os mesmos comportamentos (iniciar rota e pegar carga), mas com implementações diferentes para cada um.

Sendo assim, o Factory Method é o Transport, uma abstração que define dois comportamentos: iniciar o transporte (levando em consideração que sua implementação de criar o transporte, é padrão para todas as classes que a extenderem) e criar transporte (classes que a extenderem terão a responsabilidade de implementar, já que cada transporte tem suas particularidades em sua criação).

CarTransport e MotorcycleTransport, extendem a abstração Transport, e fica a cargo delas na implementação do método de criar transporte, realizar a instancia dos objetos Car ou Motorcycle.

Com isso, no index.js, vemos que a depender do tipo de transporte informado, os objetos são criados a partir da instância de CarTransport ou MotorcycleTransport, e o método de iniciar o transporte é executado de acordo com o objeto criado, contendo suas particularidades.

## Desafio
Além de permitir que transportes sejam feitos por carros e motos, o sistema também deverá permitir transportes feitos com bicicletas.

## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`
    * Sem passar nenhum argumento, no console será exibida a seguinte mensagem: `Informe o tipo de entrega`
    * Execute `npm run dev -- --uber` para que as implementações específicas para carros sejam executadas
    * Execute `npm run dev -- --log` para que as implementações específicas para motos sejam executadas
    * Execute `npm run dev -- --eats` para que as implementações específicas para bicicletas sejam executadas