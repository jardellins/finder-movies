![Capturar_select-area_20210615222113](https://user-images.githubusercontent.com/44972197/122143560-14541300-ce28-11eb-84c7-c91935669082.png)

<h1 align="center">
    Movies search
</h1>
<p align="center">Uma interface onde podemos encontrar algumas informações de filmes/séries, além de assistir o trailer ou ser redirecionado para o site oficial</p>


- <a href="#sobre">Sobre</a> 
- <a href="#tecnologias">Tecnologias</a>
- <a href="#overview">Overview</a>
- <a href="#iniciando">Iniciando a aplicação</a>


<br/>
<a id="sobre"></a>

## :scroll: Sobre

O projeto tem como objetivo apresentar ao usuário as novidades entre filmes e séries, além de encontrar aquele seu filme favorito. Ao selecionar o filme ou série, temos uma página mostrando algumas informações sobre a produção, como também podemos assistir o trailer oficial ou ser redirecionado para a página oficial da produção. Todas as informações foram extraidas da API do [TMDB](https://www.themoviedb.org/), fui desenvolvendo o design e as interações para que ficasse o mais agradável possível. A aplicação foi construida utilizando ReactJS, e utilizando componentes e os Hooks para um melhor aproveitamento. Realizado a construção de modal para a abertura do trailer, além de adicionar uma responsividade para telas menores.

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


<p align="center" >

![Capturar_select-area_20210615222808](https://user-images.githubusercontent.com/44972197/122144108-2d10f880-ce29-11eb-8a0e-75a648917202.png)

<p>

![Capturar_select-area_20210615200844](https://user-images.githubusercontent.com/44972197/122145285-56cb1f00-ce2b-11eb-9bde-f28c0fb0e6fd.png)
    

![Capturar_select-area_20210615224654](https://user-images.githubusercontent.com/44972197/122145441-a3aef580-ce2b-11eb-8ce2-f3fc6980cdc8.png)

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
