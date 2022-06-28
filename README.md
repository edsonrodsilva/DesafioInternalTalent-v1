
# DESAFIO INTERNAL TALENT
**Back-End**

Criar uma *API RESTful*

Existem inúmeras formas de deixar seu aplicativo com uma estrutura pronta para evolução, com funcionalidade comum de acesso a dados, fornecendo melhor capacidade de manutenção e desacoplando a infraestrutura ou tecnologia usada para acessar bancos de dados da camada de modelo de domínio. A opção abordada aqui é o Repository Pattern.

## Features
Criar uma API que contenha as seguintes Resources

                
## Modeling databases
...

## Cronagrama de desenvolvimento
...

## Rotas
<!--ts-->
# CUSTOMERS RESOURSES
| POST | api/customers

| GET | api/customers  
| GET | api/customers/{customerID}
| GET | api/customers/{customerID}/deliveries

# DELIVERIES RESOURSES
| POST | api/deliveries
| GET|HEAD | api/deliveries
| GET|HEAD | api/deliveries/{deliveriesID}
| GET|HEAD | api/deliveries/{customer_id/customers

# DELIVERYMAN RESOURSES
| POST | api/deliveryman
| GET|HEAD | api/deliveryman
| GET|HEAD | api/deliveryman/{deliverymanID}
| GET|HEAD | api/deliveryman/{customer_id/delivery
<!--te-->


## Instruções para rodar a API local
<!--ts-->
    1 - clone o projeto
    2 - Entre na pasta do projeto.
    3 - Instale as dependências usando o comando.
    npm install
    4 - use o script sql que se encontra na raís do projeto para importar o banco de dados.
    5- Configure o arquivo .env com as credenciais do banco de dados.
    6 - levante o servidor usando o comando.
    npm run dev
    7- Rode os testes com o comando: npm test ***
    8- Test a API usando Insomnia ou Postman para acessar os recursos listados abaixo.
<!--te-->


## Baixe aqui a collections do postman
...

## Testes realizados
...

## Tecnologias e ferramentas
<!--ts-->    
    * NODE.JS
    * POO
    * EXPRESS
    * API RESTful
    * MySQL
    * Git
    * PRISMA
<!--te-->

## O que tentei demostrar ##
<!--ts-->
    * Organização;
    * Simplicidade;
    * Objetividade;
    * Reúso de código;
    * Testes unitários *;
    * Testes de integração *;
    * Padronização de código;
    * Padrões de projeto;
    * Alguns dos princípios de SOLID;
<!--te-->

## Conclusão ##
Criei a API usando o Repository Pattern

Alguns princípios de SOLID utilidados
S — Single Responsiblity Principle (Princípio da responsabilidade única)

L — Liskov Substitution Principle (Princípio da substituição de Liskov)

D — Dependency Inversion Principle (Princípio da inversão da dependência)



