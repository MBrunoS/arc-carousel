---
title: Carousel.Slide
description: Referência de API para o componente Slide.
---

O componente `Slide` representa um slide individual em seu carrossel, oferecendo opções de personalização para estilo e interação.

## Propriedades

O componente `Slide` aceita as seguintes propriedades:

### HTMLAttributes\<HTMLDivElement\>

Herda todos os atributos HTML de um elemento `div`, uma vez que pode ser usado como um contêiner.

### asChild (opcional)

- Tipo: `boolean`
- Padrão: `false`

Se definido como `true`, o componente `Slide` delega sua renderização ao seu único elemento filho, mesclando todas as propriedades passadas a ele.

## Uso

Aqui está um exemplo de como usar o componente `Slide`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>
        <Carousel.Slide>{/* O conteúdo do seu slide de carrossel vai aqui */}</Carousel.Slide>
      </Carousel.Wrapper>
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O componente `Slide` representa um slide individual em seu carrossel e é projetado para funcionar com outros componentes, como `Root` e `Wrapper`.
- Ele permite opções de estilo e interação para personalizar a aparência e o comportamento de slides individuais.
