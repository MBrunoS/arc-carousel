---
title: Carousel.Wrapper
description: API reference for the Wrapper component.
---

The `Wrapper` component is an essential part of the Arc Carousel library. It acts as a container for your carousel slides, enabling layout and styling customization.

## Props

The `Wrapper` component accepts the following props:

### HTMLAttributes\<HTMLDivElement\>

Inherits all HTML attributes for a `div` element since it can be used as a container.

### asChild (optional)

- Type: `boolean`
- Default: `false`

If set to `true`, the `Wrapper` component delegates its rendering to its single child element, while merging all the props passed to it.

## Usage

Here is an example of how to use the `Wrapper` component:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>{/* Your carousel slides go here */}</Carousel.Wrapper>
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Remarks

- The `Wrapper` component is used to wrap your carousel slides and is designed to work with other components, such as `CarouselRoot` and `CarouselSlide`.
- It enables layout and styling options to better control the appearance of your carousel.
- You can set the `asChild` prop to `true` if you intend to use the `Wrapper` as a child within another container or component.
