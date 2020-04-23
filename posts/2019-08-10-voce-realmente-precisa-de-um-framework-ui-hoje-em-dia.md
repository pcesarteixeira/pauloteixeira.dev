---
title: Você realmente precisa de um framework UI hoje em dia?
subtitle: Aprenda CSS, não Bootstrap
date: '2018-08-10T17:40:32.169Z'
description: >-
  Todo mundo já está cansado de saber das vantagens que frameworks como Bootstrap e Materialize trazem para o desenvolvimento, mas realmente precisamos deles nos dias de hoje?
featuredpost: false
tags: ["frontend", "tech"]
cover: /img/cover-framework-ui.jpg
---

Todo mundo já está cansado de saber das vantagens que frameworks como Bootstrap e Materialize trazem para o desenvolvimento, mas realmente precisamos deles nos dias de hoje? 

Quem me conhece um pouco que seja sabe do meu posicionamento contrário em relação ao uso do Bootstrap. Acredito que ele traz mais desvantagens do que vantagens em “determinadas” aplicações, então vamos direto ao ponto. 

No artigo vou usar como exemplo o Bootstrap por ser mais popular mas os mesmos argumentos se aplica a basicamente todos os frameworks.

## Não traga código que você não precisa

A experiência de trabalhar em um e-commerce grande me trouxe algumas preocupações que antes eu não tinha tanto trabalhando com aplicações pequenas ou de back-office, a principal é que "Cada kb vale", o usuário pode estar acessando a aplicação de um lugar remoto, em uma conexão que talvez nem seja 3G por 'n' motivos. E tudo isso impacta diretamente no negócio.

Quando você importa o Bootstrap você está trazendo centenas de classes CSS que você desconhece que possivelmente não utilizará na sua aplicação. Temos uma ferramenta no Google Chrome que nos ajuda a saber quais são essas classes e qual a porcentagem do código está de fato sendo usado.

Abra o **Developer Tools** e depois dê o comando `cmd + shift + p`, irá abrir um campo de busca, procure por **Show Coverage** e depois clique no botão para recarregar a página para ver as estatísticas.

![Show Coverage](/img/ezgif-2-c139cc6ebfd4.gif)

As barras vermelhas representam a parte do código não utilizado pela pagina e as verdes as que são. Essas classes podem estar sendo utilizadas em outras páginas mas não haveria a necessidade de traze-las num primeiro carregamento considerando a possibilidade do usuário nem acessar as respectivas páginas que as utilizam. 

A própria documentação do Bootstrap faz download na página inicial de 150 Kb de CSS não utilizado por ela.

Com a ascensão dos frameworks javascript tornou-se um pouco menos comum escrever classes CSS globais e mais CSS dentro do contexto do próprio componente evitando esse tipo de problema.

## Coisas boas de um framework UI, porém...

O Bootstrap não é de todo mal na minha opinião, ele se encaixa muito bem em aplicações pequenas, principalmente as de back-office onde geralmente são utilizados bastante formulários, alertas e botões. Nessas aplicações geralmente a UI não é uma prioridade e sim a regra de negócio.

O **Grid System** do Bootstrap caiu nas graças do povo, afinal ele é bem simples de se entender, então para quem não tem muita afinidade com as propriedades CSS é uma mão na roda. Porém ele possui certas limitações.

Falarei dele por ser um dos principais argumentos como ponto positivo quando falamos em não utilizar o Bootstrap em alguma aplicação.

```html{5,10}
<div class="container">
  <div class="row">
    <div class="col col-lg-4 col-md-6 col-sm-12">elemento 1</div>
    <div class="col col-lg-8 col-md-6 col-sm-12">elemento 2</div>
      
  </div>
  <div class="row">
    <div class="col col-lg-4 col-md-4 col-sm-12">elemento 3</div>
    <div class="col col-lg-4 col-md-4 col-sm-12">elemento 4</div>
    <div class="col col-lg-4 col-md-4 col-sm-12">elemento 5</div>
    <div class="col col-lg-4 col-md-4 col-sm-12">elemento 6</div>
  </div>
</div>
```

Imagine a estrutura HTML acima, pessoalmente acho bem ruim a nomenclatura de classes do Bootstrap e a necessidade de criar um elemento de linha para agrupar as colunas. 

Digamos que você precise mover o **elemento 5** que está na "*linha 2*" para a "*linha 1*", como você faria isso? O Bootstrap infelizmente não te permite isso, a única forma de fazer isso seria utilizando javascript o que não seria uma solução elegante, a outra e recomendada por mim seria não utilizar Bootstrap para criar suas grids e optar por uma solução nativa que o próprio CSS nos dá.

### CSS Grid

![CSS Grid](/img/cssgrid.png)

Hoje em dia já temos soluções nativas no próprio CSS para trabalhar com grids, **CSS Grid** com ele podemos manipular elementos em uma grid em qualquer direção, seja horizontalmente como verticalmente. 

Seu HTML agora fica bem mais limpo e sem a necessidade de adicionar varias classes aos seus elementos, todas essas regras ficam em seus arquivos .css e não no HTML.

```html
<div class="grid">
  <div class="grid__header">header</div>
  <div class="grid__menu">menu</div>
  <div class="grid__main">main</div>
  <div class="grid__footer">footer</div>
</div>
```

Tentar explicar de forma breve nesse artigo como funciona CSS Grid é quase impossível então irrei compartilhar [esse artigo do CSS-Tricks (A Complete Guide to Grid)](https://css-tricks.com/snippets/css/complete-guide-grid/), nele eles falam absolutamente tudo dessa propriedade. Recomendo fortemente que deem uma olhada.

Hoje o único problema dessa propriedade que me vem a cabeça é a compatibilidade com navegadores muito antigos. Então caso isso seja uma necessidade para o negocio **Flex** talvez seja uma boa solução.

### Flex

![Flexbox](/img/flexbox-css.png)

O Flex foi adotado na versão 4 do Bootstrap, de forma resumida ele é usado para alinhar e redimensionar elementos horizontalmente. Não necessariamente você precisa importar um framework para utilizar deste recurso, ele possui uma sintaxe simples de ser entendida e aplicada, deixo aqui também [esse link em português de um guia completo para flexbox](https://origamid.com/projetos/flexbox-guia-completo/).

## Aprenda CSS, não Bootstrap

Uma pergunta sempre muito frequente em qualquer comunidade é "Qual tecnologias devo aprender primeiro?", a resposta para isso é: **o básico**. 

Se você quer ser um desenvolvedor front-end, trabalhar com web, você tem que entender coisas como HTML, CSS e Javascript funcionam, Bootstrap, React e Vue.js por exemplo são apenas ferramentas que utilizam dessas tecnologias, elas não existiam até alguns anos atrás e podem ou não morrer com o tempo. 

Mesmo que opte por utilizar um framework UI, um conhecimento sólido em CSS pode te abrir diversas possibilidades com o framework, que te permite sair da "mesmice" e dos padrões impostos por ele. Em algumas ocasiões ele é a melhor alternativa, mas nunca a solução para todos os problemas. 

Nesse artigo poderíamos nos estender por diversos tópicos como produtividade, como utilizar SASS para criar helpers e mixins, mas isso fica para um próximo artigo focado só nisso.

## Conclusão

Claro que tudo isso é minha opinião, existe inúmeras possibilidades, como importar apenas algumas coisas do Bootstrap, como suas grids ou formulários, diminuindo o tamanho do arquivo importado. Sinta-se livre para comentar abaixo o que você acha sobre o assunto, o objetivo desse artigo é fomentar a discussão em torno do assunto.