---
title: Conceitos Chave
description: Explicação dos principais conceitos da biblioteca Arc Carousel.
---

Ao trabalhar com a biblioteca Arc Carousel, existem vários conceitos e termos-chave com os quais você deve estar familiarizado. Compreender esses conceitos ajudará você a usar a biblioteca de forma eficaz e personalizar seus carrosséis para atender aos seus requisitos específicos.

## Carousel Root

O componente `Carousel.Root` é o contêiner de nível superior para o seu carrossel. Ele fornece um contexto para todos os componentes Carousel e opções de configuração. É onde você define propriedades como a orientação Carousel, o número de slides por página e muito mais.

```jsx
<Carousel.Root orientation="horizontal" slidesPerPage={1}>
  {/* ... */}
</Carousel.Root>
```

## Carousel Wrapper

O componente `Carousel.Wrapper` atua como um contêiner para os slides do seu carrossel. Você pode colocar seus itens de carrossel individuais dentro deste invólucro. Ele define o espaço onde os slides são exibidos e alinhados.

```jsx
<Carousel.Wrapper>
  <Carousel.Slide>{/* Adicione seu item de carrossel aqui */}</Carousel.Slide>
  <Carousel.Slide>{/* Adicione seu item de carrossel aqui */}</Carousel.Slide>
</Carousel.Wrapper>
```

## Carousel Slide

Cada item individual em seu carrossel é representado pelo componente `Carousel.Slide`. Você pode colocar conteúdo, imagens ou outros elementos dentro desses slides. Estes são os itens com os quais seus usuários interagirão ao navegar pelo carrossel.

```jsx
<Carousel.Slide>{/* Adicione seu item de carrossel aqui */}</Carousel.Slide>
```

## Carousel Navigation

O Arc Carousel fornece componentes de navegação integrados para permitir que os usuários interajam com o carrossel. Isso inclui:

- `Carousel.PrevButton`: Um botão para navegar para o slide anterior.
- `Carousel.NextButton`: Um botão para navegar para o próximo slide.
- `Carousel.Pagination`: Componente que exibe indicadores de paginação para os slides.
- `Carousel.PaginationItem`: Componente que renderiza um item de paginação, pode ser usado para personalizar cada item.
- `Carousel.PlayPauseButton`: Um botão para controlar a funcionalidade de reprodução automática.

```jsx
<Carousel.PrevButton />
<Carousel.Pagination render={<Carousel.PaginationItem />} />
<Carousel.NextButton />
<Carousel.PlayPauseButton />
```

## Opções de Configuração

O Arc Carousel vem com várias opções de configuração que permitem personalizar o comportamento e a aparência do seu carrossel. Algumas dessas opções incluem:

- `orientation`: Especifica se o carrossel deve ser horizontal ou vertical.
- `slidesPerPage`: Determina o número de slides exibidos em uma única página.
- `transition`: Define o tipo de transição entre os slides (por exemplo, deslizar ou desvanecer).
- `autoplay`: Controla se o carrossel deve avançar automaticamente.
- `gap`: Define o espaço entre os slides, se necessário.
- e muito mais...

```jsx
<Carousel.Root
  orientation="horizontal"
  slidesPerPage={1}
  transition="slide"
  autoplay={true}
  gap={10}
>
  {/* ... */}
</Carousel.Root>
```

Ao compreender esses conceitos-chave, você estará melhor preparado para configurar e usar a biblioteca Arc Carousel em sua aplicação React. Sinta-se à vontade para explorar nossa [Referência da API](/pt-br/reference/carousel-root/) para obter informações mais detalhadas sobre esses conceitos e opções de personalização adicionais.
