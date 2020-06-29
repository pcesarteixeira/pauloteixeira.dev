---
type: post
title: Você sabe o que é Optimistic UI?
subtitle: >-
  Optimistic UI é um paradigma no desenvolvimento front-end, quando o cliente faz uma solicitação a API atualizamos a interface do usuário de forma otimista, presumindo que a solicitaçào será bem-sucedida.
date: '2019-11-03T01:10:32.169Z'
description: >-
  Optimistic UI é um paradigma no desenvolvimento front-end, quando o cliente faz uma solicitação a API atualizamos a interface do usuário de forma otimista, presumindo que a solicitaçào será bem-sucedida.
featuredpost: false
tags: ["discuss", "tech"]
cover: /img/optimisticui.jpg
---

Esse não é um conceito novo, é amplamente utilizado principalmente por redes sociais e aplicativos de comunicação que possui diversas pequenas interações como curtidas ou comentários, por exemplo.

Normalmente essas interações são tarefas simples e rápidas de serem processadas pelo servidor, pois não fazem uso de nenhuma regra de negócio muito específica e o resultado esperado é sempre o mesmo. Com isso em mente, presumindo que a solicitação será bem-sucedida deixamos de bloquear a interface do usuário e já informados de imediato o sucesso da ação. Começamos apenas a se preocupar com um cenário de erro.

### Exemplo de caso no Twitter

O botão de curtir do Twiter é um ótimo exemplo para mostrar como isso acontece. O ícone com o coração fica marcado de imediato mesmo que a requisição ainda esteja pendente. Apenas se acontecer algum problema na requisição o ícone voltará para o estado inicial dele.

Você pode ver como funciona na animação abaixo ou você pode fazer esse teste no seu próprio computador utilizando o DevTools do Chrome para simular uma conexão mais lenta.

![Twitter example optimistic UI](/img/optimisticui.gif)

### Vantagens

- O usuário mantem seu foco no conteúdo e não se distrai com qualquer indicativo de carregamento.
- O usuário não fica bloqueado por causa de alguma requisição pendente e pode continuar utilizando a aplicação normalmente.
- O usuário tem a sensação de velocidade e fluidez em suas ações.
- A partir do momento que você adota esse tipo de abordagem naturalmente você começa a desenvolver seus componentes com interações mais simples e objetivas, facilitando na manutenibilidade do código.

### Possibilidades

Isso abre diversas possibilidades para implementar em seu projeto. Em uma PWA (progressive web application) onde é comum a navegação off-line poderíamos ter disponíveis pequenas interações do mesmo tipo e armazená-las em uma fila para que assim que possível efetuá-las no servidor. Permitiria que a navegação na aplicação não fosse prejudicada quando off-line ou em pequenas perdas de conexão.

### Onde interfaces otimistas não funcionam bem

1. Se os resultados das requisições ao servidor não forem confiáveis trabalhar com interfaces otimistas pode ser ruim para a experiência do usuário, como tratamos os erros de forma bem sutil o usuário pode não fazer ideia que as interações não foram realizadas com sucesso. 

2. Quando precisamos mostrar o resultado da requisição para o usuário (relatórios por exemplo), interfaces otimistas funcionam melhor onde o resultado esperado pode variar apenas entre "**sucesso**", "**falha**" ou "**talvez**"

------

Antes de aplicar esse conceito em seu projeto é importante entender os tempos de resposta de cada um dos endpoints do seu servidor. Talvez não seja interessante utilizar endpoints que tem tempo de resposta superior a 2 segundos.

Uma interface do usuário otimista não se trata apenas de botões e envio de mensagens (chats). A abordagem pode ser aplicada a diferentes interações e eventos durante o ciclo de vida de uma página, incluindo o carregamento da página. No Facebook por exemplo se você acessar seu feed e rolar para o fim da pagina você vai perceber que antes de recebermos do servidor o conteúdo das publicações é renderizado a estrutura da postagem com espaços reservados para o conteúdo assim que receber os resultados.

**Optimistic UI** não é uma novidade na internet, nem é uma técnica particularmente avançada. É apenas um modelo mental para ajudar a gerenciar o desempenho percebido do seu produto. Baseando-se nos aspectos psicológicos da interação humano-computador, quando usado de maneira inteligente pode ajudar a criar experiências melhores e mais contínuas nas aplicações, além de exigir muito pouco para implementar.

##### Referências

- [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/), Denys Mishunov 
- [Optimistic UIs in under 1000 words](https://uxplanet.org/optimistic-1000-34d9eefe4c05), Igor Mandrigin 
