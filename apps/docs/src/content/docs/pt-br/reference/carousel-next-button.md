---
title: Carousel.NextButton
description: Referência de API para o componente NextButton.
---

O componente `NextButton` representa um botão que permite aos usuários navegar para o próximo slide no carrossel.

## Propriedades

O componente `NextButton` aceita as seguintes propriedades:

### HTMLAttributes\<HTMLButtonElement\>

Herda todas as propriedades para um elemento `button`, uma vez que é usado para criar um botão.

### children (opcional)

- Tipo: `React.ReactNode`

O conteúdo que deve ser exibido dentro do botão, geralmente um ícone de seta para navegação. Se você não especificar esta propriedade, o botão será renderizado com um ícone de seta padrão (para a direita ou para baixo, com base na propriedade `orientation` do componente `Root`).

## Uso

Aqui está um exemplo de como usar o componente `NextButton`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.NextButton />
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O componente `NextButton` representa um botão que permite aos usuários navegar para o próximo slide no carrossel.
- Ele oferece opções para personalizar o comportamento e a aparência do botão, incluindo a capacidade de especificar o conteúdo do botão.
- O estado desativado do botão é determinado com base em se o carrossel possui um loop (`hasLoop`) e na página atual.
- Quando clicado, ele aciona o evento onPageChange e atualiza a página atual no carrossel.
