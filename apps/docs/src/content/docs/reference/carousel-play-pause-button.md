---
title: Carousel.PlayPauseButton
description: API reference for the PlayPauseButton component.
---

The `PlayPauseButton` component allows users to control the autoplay functionality of the carousel. It needs to be used in conjunction with the `autoplay` prop in the `Root` component. Otherwise, it will not render anything.

## Props

The `PlayPauseButton` component accepts the following props:

### HTMLAttributes\<HTMLButtonElement\>

Inherits all props for a `button` element since it is used to create a button.

### children (optional)

- Type: `React.ReactNode`

The content that should be displayed inside the button, typically a play or pause icon for controlling the autoplay functionality. If you don't specify this prop, the button will be rendered with a default play or pause icon (based on the current state of the carousel).

## Usage

Here is an example of how to use the `PlayPauseButton` component:

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

## Remarks

- The button's behavior toggles between starting and stopping autoplay based on the current state of the carousel.
