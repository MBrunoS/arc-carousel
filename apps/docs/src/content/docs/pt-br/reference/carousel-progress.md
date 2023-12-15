---
title: Carousel.Progress
description: Referência da API para o componente Progress.
---

O componente `Progress` é utilizado para exibir o progresso do carrossel.

## Propriedades

O componente `Progress` aceita as seguintes propriedades:

### HTMLAttributes\<HTMLProgressElement\>

Herda todos os atributos HTML de um elemento `progress`.

### asChild (opcional)

- Tipo: `boolean`
- Padrão: `false`

Se definido como `true`, o componente `Progress` delega sua renderização para seu único elemento filho, mesclando todas as propriedades passadas a ele.

## Uso

Aqui está um exemplo de como usar o componente `Progress`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarrossel() {
  return (
    <Carousel.Root>
      <Carousel.Progress />
    </Carousel.Root>
  )
}

export default MyCarrossel
```

## Observações

- O componente `Progress` é utilizado para exibir o progresso do carrossel, fornecendo uma indicação visual do slide atual.
- A barra de progresso só é renderizada se houver mais de uma página (`pagesCount > 1`).
- A propriedade `orientation` determina a orientação da barra de progresso ('horizontal' ou 'vertical').
- A barra de progresso possui um efeito de transição na alteração da largura para melhor apelo visual.

## Notas de Estilo

- A barra de progresso é renderizada como um elemento `progress`, portanto, você pode estilizá-la usando os pseudo-elementos `::-webkit-progress-bar`, `::-webkit-progress-value`, `::-moz-progress-bar` e `::-moz-progress-value`.
- A barra de progresso possui um efeito de `transição` na propriedade `width`, portanto, você pode personalizar o efeito de transição usando a propriedade `transition`.
