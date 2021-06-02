# Desafio Back-end Credistar

> Desafio para ingressar como Front-end Developer na Credistar

![CredistarLogo](https://credistar.com.br/wp-content/uploads/2020/09/fundo-branco.png "Credistar Logo")

## Sobre a Credistar

A Credistar nasceu para mudar a realidade dos brasileiros – vamos oferecer empréstimos nas melhores taxas de juros e condições de pagamento.

Vamos ajudar as pessoas a se livrarem das dívidas ruins através de crédito de qualidade. Permitimos que você use seu cartão de crédito para receber dinheiro na sua conta corrente.

Nosso objetivo é incentivar o seu progresso financeiro e te ajudar a resolver seus projetos pessoais.(https://credistar.com.br).

## Sobre o desafio

Seu desafio será implementar a criptografia de um sistema de maneira transparente para a API em Node.js e para as camadas de serviço de sua aplicação. Ou seja, seus objetos de entidades não devem transparecer se existe algum campo sensível ou não. A criptografia deve ser feita em uma conversão em tempo de execução da entidade para a coluna em seu banco de dados, e vice-versa


## Tecnologias, frameworks e bibliotecas

É obrigatório a utilização dos seguintes:

- Nodejs
- Express
#### Exemplo de tabela

Considere `userDocument` e `creditCardToken` como campos sensíveis e que devem ser encriptados:

| id | userDocument | creditCardToken | value |
|------|--------------|-----------------|-------|
| 1 | MzYxNDA3ODE4MzM= | YWJjMTIz | 5999 |
| 2 | MzI5NDU0MTA1ODM= | eHl6NDU2 | 1000 |
| 3 | NzYwNzc0NTIzODY= | Nzg5eHB0bw== | 1500 |

onde, na sua entidade:

| Campo | Tipo |
|-----------------|--------|
| id | Long |
| userDocument | String |
| creditCardToken | String |
| value | Long |

1. Faça um CRUD simples, considerando como sensíveis os campos citados acima

2. Use o algoritmo de sua preferência para criptografia. Sugestão: [SHA-512](https://en.wikipedia.org/wiki/SHA-2) ou [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

## FAQ

- Preciso necessariamente fazer um fork do projeto?
  **Sim, para que possamos saber quanto tempo você levou para executar o desafio**

- Tenho mais dúvidas, com quem posso entrar em contato?
  **Entre em contato com [Ricardo Castro](https://github.com/Lorenhaim) (Tech Lead)**

**Boa sorte.** 🚀
