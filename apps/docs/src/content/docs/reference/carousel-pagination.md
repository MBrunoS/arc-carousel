---
title: Carousel.Pagination
description: API reference for the Pagination component.
---

The `Pagination` component is used to render pagination indicators for the carousel, allowing users to navigate between different slides.

## Props

The `Pagination` component accepts the following props:

### HTMLAttributes\<HTMLDivElement\>

Inherits all HTML attributes for a `div` element since it can be used as a container.

### asChild (optional)

- Type: `boolean`
- Default: `false`

If set to `true`, the `Pagination` component delegates its rendering to its single child element, while merging all the props passed to it.

### render (optional)

- Type: `(index: number, isActive: boolean) => JSX.Element`

A render function that allows you to customize the rendering of pagination indicators. The function receives the `index` of the indicator and a boolean value, `isActive`, indicating if the indicator represents the currently active slide. To properly render the pagination indicators, the function must return a [PaginationItem](/reference/carousel-pagination-item) component.

## Usage

Here is an example of how to use the `Pagination` component:

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

## Remarks

- The `Pagination` component is used to display pagination indicators for the carousel, helping users navigate between different slides.
- It provides options for customizing the rendering of pagination indicators using the `render` prop. This allows you to create custom indicators based on the `index` and `isActive` values.
