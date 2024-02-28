# Builder 

Padrão que permite construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.

## Problema

Neste caso, um sistema foi criado com o objetivo de representar uma fábrica que constroe diferentes tipos de veículos, como: sedan, caminhão, SUV, esportivo, pickup, etc.

O foco ao utilizar o padrão Builder é que cada veículo seja criado por partes, ou seja, cada informação como: motor, tipo, rodas, assentos e transmissão, sejam informados utilizando seus respectivos métodos setters.

## Solução

1. Para isso foram criados enums e classes para representar os componentes dos veículos: Engine, Transmission, VehicleType e Wheel.

2. Uma classe foi definida para representar o veículo definindo os atributos e os métodos para buscar e setar seus componentes.

3. Para criar o builder, primeiro foi definida uma interface com os comportamentos que o VehicleBuilder ao implementá-la terá que utilizar.

4. Por fim, a classe Director, é responsável por possuir métodos especificos para criar os diferentes tipos de veiculos de acordo com suas especificações.


## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`