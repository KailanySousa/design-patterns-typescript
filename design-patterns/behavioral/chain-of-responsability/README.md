# Chain of responsability

Padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.

## Problema
Neste caso, um sistema foi criado com o objetivo de realizar validações para autenticar um usuário, de acordo com as regras:
    * E-mail válido
    * E-mail e senha devem coincidir com um usuário da base
    * Também há uma validação de permissão e uma validação para informar que a senha é fraca, caso seja igual a 123456.

O foco ao utilizar o padrão Chain of responsability é fazer com que todas as validações necessárias sejam feitas seguindo uma corrente.
Dessa forma, cada handler fica responsável por uma determinada validação e quando for necessário, interrompe a execução.
Além de também ser possível expandir o código, adicionando novos handler sem alterar o ódigo existente.

## Solução
🚧 Em construção

## Como executar

* Na raiz da pasta ***factory-method***, executar `npm i`
* Depois, para rodar o projeto, executar `npm run dev`