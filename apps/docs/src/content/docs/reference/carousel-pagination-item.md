---
title: Carousel.PaginationItem
description: API reference for the PaginationItem component.
---

The `PaginationItem` component is used to render individual pagination items that represent specific slides in the carousel. Must be used in conjunction with the `Pagination` component.

## Props

The `PaginationItem` component accepts the following props:

### HTMLAttributes\<input\>

Inherits all HTML attributes for an `input` element since it is used to render the pagination item.

### index

- Type: `number`

Specifies the index of the pagination item, representing a specific slide within the carousel.

## Usage

Here is an example of how to use the `PaginationItem` component:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Pagination
        render={(index, isActive) => <Carousel.PaginationItem index={index} />}
      />
    </Carousel.Root>
  )
}

export default MyCarousel
```

## Remarks

- The `PaginationItem` component is used to render individual pagination items that represent specific slides in the carousel.
- When a pagination item is clicked, it triggers the `onPageChange` event and updates the current page within the carousel.
