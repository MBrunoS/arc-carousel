---
title: Primeiros Passos
description: Como começar com a biblioteca Arc Carousel.
---

Bem-vindo ao Arc Carousel, uma biblioteca React poderosa e flexível que o ajudará a criar carrosséis deslumbrantes e interativos para seus projetos web. Neste guia, vamos te orientar pelas etapas para começar com a biblioteca e ter seus carrosséis funcionando em pouco tempo.

## Pré-requisitos

O Arc Carousel é uma biblioteca de componentes React, portanto, para usá-lo efetivamente, você deve ter um entendimento básico do React. Se você é novo no React, pode consultar a [documentação](https://react.dev/learn) para começar.

## Instalação

Antes de começar a usar o Arc Carousel, você precisa instalá-lo em seu projeto. Você pode fazer isso usando o gerenciador de pacotes de sua escolha.

```bash
# Usando npm
npm install arc-carousel

# Usando yarn
yarn add arc-carousel

# Usando pnpm
pnpm add arc-carousel
```

## Uso

Depois de instalar o Arc Carousel, você pode importá-lo em sua aplicação React e começar a usá-lo.

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css' // Importe os estilos padrão

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>
        <Carousel.Slide>{/* Adicione seu item de carrossel aqui */}</Carousel.Slide>
        <Carousel.Slide>{/* Adicione seu item de carrossel aqui */}</Carousel.Slide>
      </Carousel.Wrapper>

      <Carousel.PrevButton />
      <Carousel.Pagination />
      <Carousel.NextButton />
    </Carousel.Root>
  )
}

export default MyCarousel
```

Agora você tem um carrossel funcional, com estilização mínima e suporte a dispositivos móveis. Você pode personalizá-lo para atender às suas necessidades, adicionando conteúdo, estilos e opções conforme necessário.

## Configuração Básica

O Arc Carousel foi projetado para ser muito simples de usar, portanto, todas as configurações são opcionais. Aqui está um exemplo das opções de configuração padrão:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css'

function MyCarousel() {
  return (
    <Carousel.Root
      orientation="horizontal"
      slidesPerPage={1}
      initialPage={0}
      transition="slide"
      transitionDuration={300}
      gap={0}
      hasLoop={false}
      autoplay={false}
      autoplayInterval={3000}
      onSlideClick={(index: number, event: React.MouseEvent) => {}}
      onPageChange={(prevIndex: number, nextIndex: number) => {}}
      onPageChangeEnd={(index: number) => {}}
    >
      {/* ... */}
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Referência da API

Para obter informações mais detalhadas sobre como usar e personalizar o Arc Carousel, consulte nossa [Referência da API](/pt-br/reference/carousel-root/).

## Participe

Agradecemos contribuições e feedback da comunidade. Se você encontrar problemas, tiver solicitações de recursos ou quiser contribuir para o desenvolvimento do Arc Carousel, visite nosso repositório no GitHub.

- [Repositório do GitHub](https://github.com/MBrunoS/arc-carousel)

É isso! Você está pronto para criar carrosséis bonitos e acessíveis com o Arc Carousel. Se tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato.

Feliz construção de carrosséis!
