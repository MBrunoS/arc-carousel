---
title: Carousel.Root
description: API reference for the Root component.
---

The `Root` component is a key element in the Arc Carousel library. It serves as the top-level container for your carousel and provides various configuration options for customizing the carousel's behavior and appearance.

## Props

The `Root` component accepts the following props (all of them are optional):

### HTMLAttributes\<HTMLDivElement\>

Inherits all HTML attributes for a `div` element since it can be used as a container.

### orientation

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`

Specifies the orientation of the carousel, either horizontal or vertical.

### slidesPerPage

- Type: `number`
- Default: `1`

Determines the number of slides displayed on a single page of the carousel.

### initialPage

- Type: `number`
- Default: `0`

Sets the initial page index when the carousel loads.

### hasLoop

- Type: `boolean`
- Default: `false`

Determines whether the carousel should loop to the beginning/end when the user reaches the last/first slide.

### asChild

- Type: `boolean`
- Default: `false`

If `true`, the `Root` component delegates its rendering to its single child element, while merging all the props passed to it.

### transition

- Type: `'slide' | 'fade'`
- Default: `'slide'`

Specifies the type of transition between slides, either sliding or fading.

### transitionDuration

- Type: `number`
- Default: `300`

Defines the duration of the transition in milliseconds.

### gap

- Type: `number`
- Default: `0`

Sets the gap between slides in pixels.

### autoplay

- Type: `boolean`
- Default: `false`

Controls whether the carousel should autoplay.

### autoplayInterval

- Type: `number`
- Default: `3000`

Specifies the autoplay interval in milliseconds.

### Events

`Root` also accepts event handlers provided by the `Events` interface to respond to user interactions. The available event handlers include:

- `onSlideClick: (index: number, event: React.MouseEvent) => void`: Triggered when a slide is clicked.
- `onPageChange: (prevIndex: number, nextIndex: number) => void`: Triggered when the page changes.
- `onPageChangeEnd: (index: number) => void`: Triggered when the page change transition is completed.

## Usage

Here is an example of how to use the `Root` component:

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
      {/* Your carousel content goes here */}
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Remarks

- The `Root` component is designed to be the top-level container for your carousel and is typically used in conjunction with other components like `Wrapper` and `Slide`.
- Customize the `Root` component using the provided props to achieve the desired carousel behavior and appearance.
- Utilize the event handlers to respond to user interactions and control the behavior of your carousel.
