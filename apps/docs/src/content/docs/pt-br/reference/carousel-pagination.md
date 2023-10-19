---
title: Carousel.Pagination
description: Referência de API para o componente Pagination.
---

O componente `Pagination` é usado para renderizar indicadores de paginação para o carrossel, permitindo que os usuários naveguem entre diferentes slides.

## Propriedades

O componente `Pagination` aceita as seguintes propriedades:

### HTMLAttributes\<HTMLDivElement\>

Herda todos os atributos HTML de um elemento `div`, uma vez que pode ser usado como um contêiner.

### asChild (opcional)

- Tipo: `boolean`
- Padrão: `false`

Se definido como `true`, o componente `Pagination` delega sua renderização ao seu único elemento filho, mesclando todas as propriedades passadas a ele.

### render (opcional)

- Tipo: `(index: number, isActive: boolean) => JSX.Element`

Uma função de renderização que permite personalizar a renderização dos indicadores de paginação. A função recebe o `index` do indicador e um valor booleano, `isActive`, que indica se o indicador representa o slide atualmente ativo. Para renderizar adequadamente os indicadores de paginação, a função deve retornar um componente [PaginationItem](/pt-br/reference/carousel-pagination-item).

## Uso

Aqui está um exemplo de como usar o componente `Pagination`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Pagination render={(index, isActive) => renderCustomIndicator(index, isActive)} />
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O componente `Pagination` é usado para exibir indicadores de paginação para o carrossel, ajudando os usuários a navegar entre diferentes slides.
- Ele oferece opções para personalizar a renderização dos indicadores de paginação usando a propriedade `render`. Isso permite que você crie indicadores personalizados com base nos valores `index` e `isActive`.
