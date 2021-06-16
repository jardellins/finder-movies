<h1 align="center">
    Movies search
</h1>
<p align="center">Uma interface onde podemos encontrar algumas informações de filmes/séries, além de assistir o trailer ou ser redirecionado para o site oficial</p>

<p align="center">
 <a href="#sobre">Sobre</a> 
 <a href="#tecnologias">Tecnologias</a>
 <a href="#overview">Overview</a>
 <a href="#iniciando">Iniciando a aplicação</a>
</p>

<br/>
<a id="sobre"></a>

## :scroll: Sobre

O projeto tem como objetivo apresentar ao usuário as novidades entre filmes e séries, além de encontrar aquele seu filme favorito. Ao selecionar o filme ou série, temos uma página mostrando algumas informações sobre a produção, como também podemos assistir o trailer oficial ou ser redirecionado para a página oficial da produção. Todas as informações foram extraidas da API do [TMDB](https://www.themoviedb.org/), e o design fui desenvolvendo conforme o meu agrado. A aplicação foi construida utilizando ReactJS, e utilizando componentes e os Hooks para um melhor aproveitamento. Realizado a construção de modal para a abertura do trailer, além de adicionar uma responsividade para telas menores.

<br/>
<a id="tecnologias"></a>

## :wrench: Tecnologias

Esse projeto foi desenvolvido com a seguinte Stack

- [ReactJS](https://reactjs.org/)
- [ReactPlayer](https://www.npmjs.com/package/react-player)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

<br/>
<a id="overview"></a>

## Overview da Aplicação

Página inicial com as novidades de filmes e séries

![Capturar_select-area_20210615222113](https://user-images.githubusercontent.com/44972197/122143560-14541300-ce28-11eb-84c7-c91935669082.png)

![Capturar_select-area_20210615222808](https://user-images.githubusercontent.com/44972197/122144108-2d10f880-ce29-11eb-8a0e-75a648917202.png)

Interações das páginas

![Gravar_select-area_20210615200758](https://user-images.githubusercontent.com/44972197/122143638-32ba0e80-ce28-11eb-8199-cbc66acf328c.gif)

![Gravar_select-area_20210615213919](https://user-images.githubusercontent.com/44972197/122143672-46fe0b80-ce28-11eb-9fca-e67114140275.gif)

<br/>
<a id="iniciando"></a>

## Iniciando a aplicação

Para utilizar os dados da API do [TMDB](https://www.themoviedb.org/) será necessário criar uma conta no site https://www.themoviedb.org/documentation/api e criar um projeto para que seja disponibilado um TOKEN.

## Download do Projeto

```sh

git clone https://github.com/jardellins/finder-movies.git

```

## Iniciar o Projeto

Entrar no diretório da plaicação

```sh

cd finder-movies

```

E em seguida rodar os comandos

```sh
yarn install

yarn start
```