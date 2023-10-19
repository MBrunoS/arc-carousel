---
title: Carousel.PlayPauseButton
description: Referência de API para o componente PlayPauseButton.
---

O componente `PlayPauseButton` permite aos usuários controlar a funcionalidade de reprodução automática do carrossel. Ele precisa ser usado em conjunto com a propriedade `autoplay` no componente `Root`. Caso contrário, não renderizará nada.

## Propriedades

O componente `PlayPauseButton` aceita as seguintes propriedades:

### HTMLAttributes\<HTMLButtonElement\>

Herda todas as propriedades de um elemento `button`, uma vez que é usado para criar um botão.

### children (opcional)

- Tipo: `React.ReactNode`

O conteúdo que deve ser exibido dentro do botão, geralmente um ícone de play ou pause para controlar a funcionalidade de reprodução automática. Se você não especificar esta propriedade, o botão será renderizado com um ícone de play ou pause padrão (com base no estado atual do carrossel).

## Uso

Aqui está um exemplo de como usar o componente `PlayPauseButton`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.PlayPauseButton />
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O comportamento do botão alterna entre iniciar e interromper a reprodução automática com base no estado atual do carrossel.
