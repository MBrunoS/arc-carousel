# ARC Carousel

Carousel React components, with accessibility in mind.

## Installation

```bash
npm install @mbrunos/arc-carousel
```

## Usage

```jsx
import React from 'react'
import { Carousel } from '@mbrunos/arc-carousel'

const App = () => {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
        <Carousel.Slide>Slide 3</Carousel.Slide>
      </Carousel.Wrapper>
    </Carousel.Root>
  )
}

export default App
```
