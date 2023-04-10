#  PROJECT-BLOGS-API !
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

Projeto desenvolvido enquanto aluno da Trybe para praticar conceitos do ORM Sequelize, além de diversas outras tecnologias como, Node.js, Express e MySQL.

## Sobre a estrutura do projeto

- Neste projeto foi desenvolvido uma API e um banco de dados, utilizando Node.js e o ORM Sequelize para realizar o CRUD de posts em um blog. Foi utilizado o princípio REST para desenvolver essa API, bem como a prática de clean code.
- O código que autoral consta no diretório ./src/, a menos dos seeders, do diretório ./src/config/ e ./src/server.js, que já vieram com configurações padrôes feitas pela Trybe.
- As configurações de docker, lint, sequelizerc e package.json foram fornecidas previamente pela Trybe.

## Sobre as funcionalidades desenvolvidas por mim
- Desenvolvi models e migration para realizar o CRUD do cadastro e login de um usuário junto ao desenvolvimento de endpoints. Dessa forma é possível realizar um login caso já tenha cadastro, realizar cadastro, criar um perfil e realizar buscas e postagens de posts, etc.
- Por exemplo, um login é realizado na rota /login pelo método HTTP post. As rotas existentes constam em ./src/routes/, estas por sua vez quando recebem alguma requisição do cliente executam suas repesctivas funcionalidas desenvolvidas em ./src/controllers/ e ./src/services/. No entanto, as validações de dados para cada rota, são encontradas em ./src/middlwares.

## Como iniciar o projeto em sua máquina

1. Faça o clone do repositório e rode o `npm install`.
2. Para rodar localmente, é necessário o Node 16+ e o MySQL 8+ instalado e executar o comando `npm run prestart` e depois `npm start` na raíz do projeto. 
3. Para rodar via docker, é preciso ter o docker-compose v1.29 ou mais instalado e executar o comando `docker-compose up -d` na raíz do projeto.
4. Sinta livre para explorar o código :grin:
- PS: é recomendável ter a extensão thunderclient instalada em seu vscode para melhor visualização das requisições.

## Ambições futuras

- Desejo desenvolver um front-end para ser integrado com o back-end.
- Adicionar mais rotas e funcionalidades.

## Conclusão

Foi um projeto muito divertido de desenvolver, onde pude aprender mais ainda, fazer pesquisas, melhorar minhas hard skills e aprender coisas novas!

