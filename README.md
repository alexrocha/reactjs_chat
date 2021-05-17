# Chat com ReactJS

## Objetivo:

Este projeto tem como objetivo explorarmos os principais conceitos de ReactJS como uso de High Order Components para delegar atributos e metodos entre componentes, alguns design patterns para facilitar a organização de código e diminuir redundancias.

## Tecnologias utilizadas:

- ** Tecnologias backend **
    -  [Json Server](https://www.npmjs.com/package/json-server)

- ** Tecnologias frontend **
    -  [ReactJS](https://reactjs.org/)
    -  [NextJS](https://nextjs.org/)
    -  [Axios] (https://github.com/axios/axios)

- ** Padrões de projeto **
    -  [DAO](https://en.wikipedia.org/wiki/Data_access_object)
    -  [Strategy](https://refactoring.guru/pt-br/design-patterns/strategy)


## Exigências

**:warning: Atenção:** É necessário que os desenvolvedores usem o Docker no seu ambiente de desenvolvimento.

- **🛠 Modo Desenvolvimento Docker**
    - :computer: [Linux Ubuntu LTS](https://ubuntu.com/download/desktop)
    - 🐳 [Docker](https://docs.docker.com/engine/installation/) Deve estar instalado.
    - 🐳 [Docker Compose](https://docs.docker.com/compose/) Deve estar instalado.
    - **💡 Dica:** [Documentação do Docker](https://docs.docker.com/)

## 🐳 Modo Desenvolvimento com Docker

Após instalar o docker e docker-compose, estando na pasta raiz do projeto, execute:

```sh
docker-compose build
```
Para rodar a aplicação, execute:

```sh
docker-compose run --rm app
```
Para acessar o container da aplicação, execute:

```sh
docker-compose run --rm app bash
```

Para derrubar a instância do docker, execute:

```sh
docker-compose down
```

## Permissões de arquivos:

Ao se adicionar libs ou qualquer outro comando que crie arquivos dentro do contâiner Docker o proprietário para edição se torna o contâiner, sendo assim você precisará rodar o comando abaixo para alterar essas permissões e você poder editar:

```sh
sudo chown -R $USER:$USER .
```