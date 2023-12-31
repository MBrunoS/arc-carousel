---
title: Carousel.NextButton
description: API reference for the NextButton component.
---

The `NextButton` component represents a button that allows users to navigate to the previous slide in the carousel.

## Props

The `NextButton` component accepts the following props:

### HTMLAttributes\<HTMLButtonElement\>

Inherits all props for a `button` element since it is used to create a button.

### children (optional)

- Type: `React.ReactNode`

The content that should be displayed inside the button, typically an arrow icon for navigation. If you don't specify this prop, the button will be rendered with a default arrow icon (right or down, based on the `orientation` prop of the `Root` component).

## Usage

Here is an example of how to use the `NextButton` component:

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

## Remarks

- The `NextButton` component represents a button that allows users to navigate to the next slide in the carousel.
- It provides options for customizing the button's behavior and appearance, including the ability to specify the button's content.
- The button's disabled state is determined based on whether the carousel has a loop (`hasLoop`) and the current page.
