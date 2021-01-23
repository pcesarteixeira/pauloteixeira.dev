---
type: post
title: Calculadora Imposto de Renda para ações
subtitle: >-
  Optimistic UI é um paradigma no desenvolvimento front-end, quando o cliente faz uma solicitação a API atualizamos a interface do usuário de forma otimista, presumindo que a solicitaçào será bem-sucedida.
date: '2021-01-20T01:10:32.169Z'
description: >-
  Optimistic UI é um paradigma no desenvolvimento front-end, quando o cliente faz uma solicitação a API atualizamos a interface do usuário de forma otimista, presumindo que a solicitaçào será bem-sucedida.
featuredpost: false
tags: ["discuss", "tech"]
cover: /img/stocks.jpg
---

Depois que comecei a trabalhar em uma fintech me apaixonei pelo mercado financeiro. Desde então comecei a investir e seguir algumas pessoas no twitter do mercado financeiro, se tornou um hobbie perder alguns minutos por dia lendo discussões em torno do assunto.

Dentre essas discussões surgiu uma coisa que percebi que poderia acabar virando um produto. Uma calculadora para imposto de renda que alem de calcular qual será o valor do imposto pago te recomendasse a venda de algumas ações que estão no prejuizo para abater no imposto de renda. **O Objetivo é diminuir o seu imposto de renda. :)**

> No momento que estou escrevendo esse texto não tenho absolutamente nada, então vou escreve-lo enquanto evoluo no desenvolvimento.

#### O que preciso para tornar isso realidade? 

1. Tem que ser um MVP para que eu possa desenvolver apenas em um final de semana. Então sem arquiteturas complexas que me exijam muito tempo.
2. Que seja barato. A ideia não é que eu gere receita com esse projeto então manter essa aplicação barata é bem importante.
3. Ter em mãos todas as taxações e regras de isensão de imposto de renda. Essa é mais complicado, vou mandar algumas mensagens para algumas pessoas agora e até o final do projeto espero já ter alguma coisa.

#### Coleta de dados

Preciso de todas as compras e vendas das ações do usuário. Para conseguir isso existem dois caminhos possiveis, posso solicitar que o usuário cadastre uma a uma, porém eu teria que fazer uma API para isso. A outra alternativa seria importar isso com um crawler direto do Canal Eletrônico do Investidor da B3 (CEI).

Fazer através de um crawler vai ser mais rápido. O tratamento desses dados tentarei fazer do lado do cliente mesmo, assim não precisarei fazer nenhuma outra API e nem coletar dados dos usuários, todo o processamento fica por conta do navegador do usuário que me ajuda bastante em evitar custos. Se durante o desenvolvimento surgir a necessidade de uma API para alguma coisa a gente vê o que faz. 😃

#### CEI

> O nível de uso gratuito do AWS Lambda inclui 1 milhão de solicitações gratuitas por mês e 400.000 GB/segundos de tempo de computação por mês.

A Amazon possue um nivel gratuito que vai atender bem as necessidades do projeto por enquanto. Pra simplificar e agilizar o processo vou colocar o crawler em um Lambda através do **Serverless**, assim ele cuida de toda a parte de configuração do API Gateway e Lambda.

Vou economizar bastante tempo nessa parte de comunicação com a CEI porque não vou precisar escrever o crawler do zero, já existe um pacote open-source que o [@Menighin mantem](https://github.com/Menighin/cei-crawler). Como vou tentar não coletar nenhuma informação do usuário o lambda vai ficar bem simples.

```js
'use strict';

const CeiCrawler = require('cei-crawler');

module.exports.hello = async event => {
  try {
    const { username, password } = JSON.parse(event.body);
    const ceiCrawler = new CeiCrawler(username, password, { capDates: true });
    const stockHistory = await ceiCrawler.getStockHistory(new Date('2010-01-01'), new Date());
  
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(stockHistory),
    };
    
  } catch (error) {
    return {
      statusCode: 400,
      body: error.message
    }
  }  
};
```

O pacote **cei-crawler** já está retornando nossas ações separadas por instituição, então no front-end vou apenas ter que descobrir o que

```json
[
  {
    "institution": "114 - ITAU CV S/A",
    "account": "********",
    "stockHistory": [] // historico de compra e venda das ações
  },
  {
    "institution": "386 - RICO INVESTIMENTOS - GRUPO XP",
    "account": "********",
    "stockHistory": [] // historico de compra e venda das ações
  },
  {
    "institution": "1099 - INTER DTVM LTDA",
    "account": "********",
    "stockHistory": [] // historico de compra e venda das ações
  }
]
```

