---
title: Carousel.PaginationItem
description: Referência de API para o componente PaginationItem.
---

O componente `PaginationItem` é usado para renderizar itens de paginação individuais que representam slides específicos no carrossel. Deve ser usado em conjunto com o componente `Pagination`.

## Propriedades

O componente `PaginationItem` aceita as seguintes propriedades:

### HTMLAttributes\<input\>

Herda todos os atributos HTML de um elemento `input`, uma vez que é usado para renderizar o item de paginação.

### index

- Tipo: `number`

Especifica o índice do item de paginação, representando um slide específico no carrossel.

## Uso

Aqui está um exemplo de como usar o componente `PaginationItem`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Pagination
        render={(index, isActive) => <Carousel.PaginationItem index={index} />}
      />
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O componente `PaginationItem` é usado para renderizar itens de paginação individuais que representam slides específicos no carrossel.
- Quando um item de paginação é clicado, ele aciona o evento `onPageChange` e atualiza a página atual no carrossel.
