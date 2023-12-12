---
title: Carousel.Root
description: Referência de API para o componente Root.
---

O componente `Root` é um elemento-chave na biblioteca Arc Carousel. Ele serve como o contêiner de nível superior para o seu carrossel e fornece várias opções de configuração para personalizar o comportamento e a aparência do carrossel.

## Propriedades

O componente `Root` aceita as seguintes propriedades (todas são opcionais):

### HTMLAttributes\<HTMLDivElement\>

Herda todos os atributos HTML de um elemento `div`, uma vez que pode ser usado como um contêiner.

### orientation

- Tipo: `'horizontal' | 'vertical'`
- Padrão: `'horizontal'`

Especifica a orientação do carrossel, seja horizontal ou vertical.

### slidesPerPage

- Tipo: `number | Record<'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', number>`
- Padrão: `1`

Determina o número de slides exibidos em uma única página do carrossel. O número de slides pode ser especificado como um único número ou um objeto contendo breakpoints para diferentes tamanhos de tela.

Os breakpoints são baseados nos do [Tailwind CSS](https://tailwindcss.com/docs/responsive-design) e são usados para determinar o número de slides exibidos em uma única página para diferentes tamanhos de tela.

Por exemplo, se você quiser exibir 2 slides por página em telas pequenas e 3 slides por página em telas médias, você pode fazer o seguinte:

```jsx
<Carousel.Root
  slidesPerPage={{
    base: 1,
    sm: 2,
    md: 3,
  }}
>
  {/* O conteúdo do seu carrossel vai aqui */}
</Carousel.Root>
```

### initialPage

- Tipo: `number`
- Padrão: `0`

Define o index da página inicial quando o carrossel é carregado.

### hasLoop

- Tipo: `boolean`
- Padrão: `false`

Determina se o carrossel deve fazer loop para o início/fim quando o usuário atinge o último/primeiro slide.

### asChild

- Tipo: `boolean`
- Padrão: `false`

Se `true`, o componente `Root` delega sua renderização ao seu único elemento filho, mesclando todas as propriedades passadas a ele.

### transition

- Tipo: `'slide' | 'fade'`
- Padrão: `'slide'`

Especifica o tipo de transição entre slides, seja deslizar ou de desvanecer.

### transitionDuration

- Tipo: `number`
- Padrão: `300`

Define a duração da transição em milissegundos.

### gap

- Tipo: `number`
- Padrão: `0`

Define o espaço entre os slides em pixels.

### autoplay

- Tipo: `boolean`
- Padrão: `false`

Controla se o carrossel deve ser reproduzido automaticamente.

### autoplayInterval

- Tipo: `number`
- Padrão: `3000`

Especifica o intervalo de reprodução automática em milissegundos.

### Eventos

`Root` também aceita manipuladores de eventos (event handlers) fornecidos pela interface `Events` para responder às interações do usuário. Os manipuladores de eventos disponíveis incluem:

- `onSlideClick: (index: number, evento: React.MouseEvent) => void`: Acionado quando um slide é clicado.
- `onPageChange: (prevIndex: number, nextIndex: number) => void`: Acionado quando a página muda.
- `onPageChangeEnd: (index: number) => void`: Acionado quando a transição de mudança de página é concluída.

## Uso

Aqui está um exemplo de como usar o componente `Root`:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root
      orientation="horizontal"
      slidesPerPage={1}
      initialPage={0}
      hasLoop={false}
      transition="slide"
      transitionDuration={300}
      gap={0}
      autoplay={false}
      autoplayInterval={3000}
    >
      {/* O conteúdo do seu carrossel vai aqui */}
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Observações

- O componente `Root` foi projetado para ser o contêiner de nível superior para o seu carrossel e é normalmente usado em conjunto com outros componentes, como `Wrapper` e `Slide`.
- Personalize o componente `Root` usando as propriedades fornecidas para alcançar o comportamento e a aparência desejados do carrossel.
- Utilize os manipuladores de eventos para responder às interações do usuário e controlar o comportamento do seu carrossel.
