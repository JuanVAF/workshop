---
description: >-
  Neste tutorial vamos ajudá-lo a criar um aplicativo Web utilizando React para
  consumir uma API
---

# workshop-react-consuming-api

## O que é React?

O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. Se preferir [clique aqui](https://www.youtube.com/watch?v=cEczlv669Oo) para assistir a um video e ter mais informações sobre React. 

![](.gitbook/assets/luke-chesser-lg8toawe8wq-unsplash.jpg)

Aqui está o link do repositório do projeto: [https://github.com/facebook/react](https://github.com/facebook/react).

## Preparação do ambiente

A primeira coisa que precisamos fazer antes de iniciar nosso projeto é garantir que temos o [NodeJs](https://nodejs.org/en/download/) instalado em nosso sistema**.** Para isto, abra um terminal **Ctrl + R** e digite `cmd` agora no seu prompt de comando digite `node -v`, assim saberemos qual a versão do node instalada. Caso, retorne um erro, significará que o NodeJs não está instalado, então, [clique aqui](https://nodejs.org/en/download/) e baixe o NodeJs versão LTS, conforme seu sistema operacional e instale na sua máquina. Para instalar o Node é só dar next, next e finish. =\) 😉 Após a instalação concluída, repita a operação para verificar a versão.

![](.gitbook/assets/node%20%281%29.png)

Pronto! O NodeJs foi instalado com sucesso! 🥳 🎉 

![](.gitbook/assets/node.png)

O próximo passo é instalar a IDE para fazer o código do nosso projeto, caso não tenha instalado em sua máquina [clique aqui](https://code.visualstudio.com/download) para baixar o VSCode. 

![Lembrando que todas as ferramentas que vamos utilizar s&#xE3;o Open Sources.](.gitbook/assets/vscode.png)

Uma vez instalado o VSCode, vamos criar o nosso projeto. 

O NodeJs tem seu próprio gerenciador de dependências, ele nos permite instalar outros pacotes que iremos precisar no nosso projeto. O Yarn também é um gerenciador de dependências.

Primeiro, abra um prompt de comando, digite ou copie o comando abaixo:

```text
npm install -g yarn
```

Agora você pode conferir a versão do yarn digitando `yarn -v`

![](.gitbook/assets/yarn.png)

Vamos usar o comando a seguir para instalar o gerador de aplicativos do React. `yarn global add create-react-app`

Se quiser saber mais sobre o `create-react-app` pode conferir a documentação clicando [aqui](https://create-react-app.dev/).

## Criando o projeto 

A ideia é criar uma  aplicação que fará o cadastro de usuários permitindo que eles criem eventos como: eventos, conferências, palestras, simpósios e workshops. Este comando irá criar o nosso projeto chamado **workshop**. Mas, você pode dar o nome que preferir.

`create-react-app workshop`

Aguarde o final da instalação. Em seguida, navegue para a pasta do projeto e inicie a aplicação.

`cd workshop && yarn start`

![Voc&#xEA; ir&#xE1; ver uma p&#xE1;gina como esta no seu browser.](.gitbook/assets/react.png)

**Ctrl + C** para finalizar o processo. No diretório do projeto em que você acabou de criar digite `code .` para abrir o VSCode. 

![VSCode](.gitbook/assets/vscode2.png)

## Instalação da biblioteca material UI

Instale a biblioteca de materiais do React chamada Material UI. Para isto abra o terminal dentro do VSCode apertando as teclas **Ctrl + Shift +  '**  do seu  ****teclado ou clicando no menu superior em **Terminal,** em seguida **New Terminal**. Copie o código abaixo e cole no terminal aberto e aperte **Enter.**

```text
yarn add @material-ui/core
```

Após isto, da mesma forma que realizou o passo anterior, instale o pacote [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons).

```text
yarn add @material-ui/icons
```

Instale também o framework [bootstrap](https://react-bootstrap.github.io/), com ele será mais fácil importar componentes para dentro do nosso projeto.

```text
yarn add react-bootstrap bootstrap
```

O React cria os arquivos e pastas que estaremos usando para modificar nosso projeto, e deixá-lo do jeito que nós queremos. Vá até a pasta **public** dentro dela está o nosso index.html. Dentro dele você vai encontrar dentro da tag body a`<div id="root"></div>` que é onde nossas alterações irão aparecer. Não apague essa div, do contrário terá problemas com a renderização do seu app.

## [Wireframe](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=workshop.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FJuanVAF%2Fworkshop%2Fmaster%2Fworkshop.drawio) 

Vamos dar uma olhada no wireframe do nosso projeto. [Clique aqui](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=workshop.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FJuanVAF%2Fworkshop%2Fmaster%2Fworkshop.drawio)

![](.gitbook/assets/workshop.png)

## Criando a tela de login

Dentro da pasta **src** está o arquivo App.js nele é possível incluir os componentes necessários para o nosso projeto. Para começar vamos remover todo o conteúdo deste arquivo deixando apenas a importação do React.

![](.gitbook/assets/tela-1.png)

Fizemos isso para começar a adicionar os componentes e elementos do nosso aplicativo Web. Então, não se preocupe, que logo vamos ter nossa tela de login criada. Abaixo da linha onde estamos importando o React, vamos importar os outros componentes.

## Criando a Home Page

Vamos agora criar a nossa homepage. 

A primeira coisa que precisamos fazer é criar os arquivos que são responsáveis por gerar os componentes que estão presentes no nosso wireframe, e que vamos precisar importar da biblioteca Material UI, que são: AppBar, Carousel, Cards, Footer, por exemplo.

Então, vamos criar uma pasta chamada **components** dentro da pasta **src** e outra pasta dentro de **components** com o nome do componente, no caso, **AppBar.** Dentro desta pasta também vamos criar um arquivo chamado **AppBar.js.** Agora abra o site ****[**Material UI**](https://material-ui.com/getting-started/installation/) se ****ainda não instalou, siga os passos para a instalação. Se já tiver instalado então, à esquerda você encontra um menu com várias opções, procure por **Componentes&gt;Surfaces&gt;App Bar**. Escolha um dos tipos de barras de aplicativos existentes.

Veja na figura abaixo:

![](.gitbook/assets/appbar.png)



Clique no botão **&lt; &gt;** e copie o código inteiro. Cole dentro do nosso arquivo **AppBar.js** que criamos e salve o arquivo. Abra o arquivo **App.js** e importe o componente, no meu caso, o componente se chama **PrimarySearchAppBar**. 

Insira o código abaixo no App.js. 

```text
import React, { Component } from 'react'; 
import './App.css';
import PrimarySearchAppBar from './components/AppBar/AppBar';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimarySearchAppBar/>
      </React.Fragment>
    
    );
  }
}

export default App;
```

então agora é só repetir o processo para os outros componentes inserindo todos dentro do componente React.Fragment.

```text
<React.Fragment>
    <PrimarySearchAppBar/>
    <Outro Componente/>
    <Outro Componente/>
</React.Fragment>
```

Pronto! No final você pode rodar o comando `yarn start` para iniciar o servidor e ver o resultado no seu Browser. 

## Criando formulário para cadastro

## Consumindo a API

[JSON](https://www.json.org/json-en.html)



{% embed url="https://jsonplaceholder.typicode.com/" %}





Pronto! Projeto Finalizado! 

Parabéns se conseguiu chegar até aqui.

 









