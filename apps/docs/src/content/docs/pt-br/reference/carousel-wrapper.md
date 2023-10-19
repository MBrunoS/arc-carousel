---
title: Carousel.Wrapper
description: Referência de API para o componente Wrapper.
---

O componente `Wrapper` é uma parte essencial da biblioteca Arc Carousel. Ele atua como um contêiner para os slides do seu carrossel, permitindo personalização de layout e estilo.

## Propriedades

O componente `Wrapper` aceita as seguintes propriedades:

### HTMLAttributes\<HTMLDivElement\>

Herda todos os atributos HTML de um elemento `div`, uma vez que pode ser usado como um contêiner.

### asChild (opcional)

- Tipo: `boolean`
- Padrão: `false`

Se definido como `true`, o componente `Wrapper` delega sua renderização ao seu único elemento filho, mesclando todas as propriedades passadas a ele.

## Uso

Aqui está um exemplo de como usar o componente `Wrapper`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>{/* Seus slides de carrossel vão aqui */}</Carousel.Wrapper>
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O componente `Wrapper` é usado para envolver os slides do seu carrossel e é projetado para funcionar com outros componentes, como `CarouselRoot` e `CarouselSlide`.
- Ele permite opções de layout e estilo para melhor controlar a aparência do seu carrossel.
- Você pode definir a propriedade `asChild` como `true` se pretende usar o `Wrapper` como um filho dentro de outro contêiner ou componente.
