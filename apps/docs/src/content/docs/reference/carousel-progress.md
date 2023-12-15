---
title: Carousel.Progress
description: API reference for the Progress component.
---

The `Progress` component is used to display the progress of the carousel.

## Props

The `Progress` component accepts the following props:

### HTMLAttributes\<HTMLProgressElement\>

Inherits all HTML attributes for a `progress` element.

### asChild (optional)

- Type: `boolean`
- Default: `false`

If set to `true`, the `Progress` component delegates its rendering to its single child element, while merging all the props passed to it.

## Usage

Here is an example of how to use the `Progress` component:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Progress />
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Remarks

- The `Progress` component is used to display the progress of the carousel, providing a visual indication of the current slide.
- The progress bar is only rendered if there is more than one page (`pagesCount > 1`).
- The `orientation` prop determines the orientation of the progress bar ('horizontal' or 'vertical').
- The progress bar has a transition effect on the width change for better visual appeal.

## Styling Notes

- The progress bar is rendered as a `progress`, so you can style it using the `::-webkit-progress-bar`, `::-webkit-progress-value`, `::-moz-progress-bar` and `::-moz-progress-value` pseudo-elements.
- The progress bar has a `transition` effect on the `width` property, so you can customize the transition effect using the `transition` property.
