---
title: Carousel.Slide
description: API reference for the Slide component.
---

The `Slide` component represents an individual slide within your carousel, offering customization options for styling and interaction.

## Props

The `Slide` component accepts the following props:

### HTMLAttributes\<HTMLDivElement\>

Inherits all HTML attributes for a `div` element since it can be used as a container.

### index (optional)

- Type: `number`
- Default: `0`

Specifies the index of the slide. It's used to determine the slide's position within the carousel. **This is used internally by the library and should not be changed.**

### asChild (optional)

- Type: `boolean`
- Default: `false`

If set to `true`, the `Slide` component delegates its rendering to its single child element, while merging all the props passed to it.

## Usage

Here is an example of how to use the `Slide` component:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>
        <Carousel.Slide>{/* Your carousel slide content goes here */}</Carousel.Slide>
      </Carousel.Wrapper>
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Remarks

- The `Slide` component represents an individual slide within your carousel and is designed to work with other components, such as `Root` and `Wrapper`.
- It enables styling and interaction options to customize the appearance and behavior of individual slides.
