---
title: Getting Started
description: How to start with the Arc Carousel library.
---

Welcome to Arc Carousel, a powerful and flexible React carousel library that will help you create stunning, interactive carousels for your web projects. In this guide, we'll walk you through the steps to get started with Arc Carousel and have your carousels up and running in no time.

## Installation

Before you can begin using Arc Carousel, you need to install it into your project. You can do this using npm or yarn.

```bash
# Using npm
npm install @mbrunos/arc-carousel

# Using yarn
yarn add @mbrunos/arc-carousel

# Using pnpm
pnpm add @mbrunos/arc-carousel
```

## Usage

Once you've installed Arc Carousel, you can import it into your React application and start using it.

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>
        <Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
        <Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
      </Carousel.Wrapper>
    </Carousel.Root>
  )
}

export default MyCarousel
```

Now, you can customize your carousel by adding content, styles, and options as needed.

## Basic Configuration

Arc Carousel is designed with accessibility in mind, and all settings are optional. Here's an example of the default configuration options:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'

function MyCarousel() {
  const carouselSettings = {
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    slidesPerPage: 1, // Number of slides per page
    initialPage: 0, // Initial page index
    hasLoop: true, // Whether the carousel should loop
    asChild: false, // Whether the carousel root should be used as a child component
    transition: 'slide', // 'slide' or 'fade'
    transitionDuration: 300, // Duration of the transition in milliseconds
    gap: 0, // Gap between slides in pixels
    onSlideClick: (index: number, event: React.MouseEvent) => {
      // Handle slide click event
    },
    onPageChange: (prevIndex: number, nextIndex: number) => {
      // Handle page change event
    },
    onPageChangeEnd: (index: number) => {
      // Handle page change end event
    },
  }

  return <Carousel.Root {...carouselSettings}>{/* ... */}</Carousel>
}

export default MyCarousel
```

## API Reference

For more detailed information on how to use and customize Arc Carousel, check out our API reference. You'll find in-depth guides, API reference, and examples to help you make the most of our library.

- [API Reference](/reference/carousel-root/)

## Get Involved

We welcome contributions and feedback from the community. If you encounter issues, have feature requests, or want to contribute to the development of Arc Carousel, please visit our GitHub repository.

- [GitHub Repository](https://github.com/MBrunoS/arc-carousel)

That's it! You're all set to create beautiful and accessible carousels with Arc Carousel. If you have any questions or need assistance, don't hesitate to reach out.

Happy carousel building!
