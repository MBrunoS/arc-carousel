<img src="logo.svg" width="100%" alt="Arc Carousel" />

> React Carousels with no effort

Welcome to Arc Carousel, a powerful and flexible React library that will help you create stunning, interactive carousels for your web projects. In this guide, we'll walk you through the steps to get started with the library and have your carousels up and running in no time.

## Prerequisites

Arc Carousel is a React component library. To use it effectively, you should have a basic understanding of React. If you are new to React, you can refer to the [documentation](https://react.dev/learn) to get started.

## Installation

Before you can begin using Arc Carousel, you need to install it into your project. You can do this using the package manager of your choice.

```bash
# Using npm
npm install arc-carousel

# Using yarn
yarn add arc-carousel

# Using pnpm
pnpm add arc-carousel
```

## Usage

Once you've installed Arc Carousel, you can import it into your React application and start using it.

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css' // Import the default styles

function MyCarousel() {
  return (
    <Carousel.Root>
      <Carousel.Wrapper>
        <Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
        <Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
      </Carousel.Wrapper>

      <Carousel.PrevButton />
      <Carousel.Pagination />
      <Carousel.NextButton />
    </Carousel.Root>
  )
}

export default MyCarousel
```

Now you have a functional carousel, with minimal styling and mobile support. You can customize it to suit your needs by adding content, styles, and options as needed.

## Basic Configuration

Arc Carousel is designed to be very simple to use, so all settings are optional. Here's an example of the default configuration options:

```jsx
import React from 'react'
import { Carousel } from 'arc-carousel'
import 'arc-carousel/styles.css'

function MyCarousel() {
  return (
    <Carousel.Root
      orientation="horizontal"
      slidesPerPage={1}
      initialPage={0}
      transition="slide"
      transitionDuration={300}
      gap={0}
      hasLoop={false}
      autoplay={false}
      autoplayInterval={3000}
      onSlideClick={(index: number, event: React.MouseEvent) => {}}
      onPageChange={(prevIndex: number, nextIndex: number) => {}}
      onPageChangeEnd={(index: number) => {}}
    >
      {/* ... */}
    </Carousel.Root>
  )
}

export default MyCarousel
```

## API Reference

For more detailed information on how to use and customize Arc Carousel, check out our [API Reference](https://arc-carousel.mbrunos.dev/reference/carousel-root/).

## Get Involved

We welcome contributions and feedback from the community. If you encounter issues, have feature requests, or want to contribute to the development of Arc Carousel, please feel free to [open an issue](https://github.com/MBrunoS/arc-carousel/issues/new/choose) or submit a pull request.

That's it! You're all set to create beautiful and accessible carousels with Arc Carousel. If you have any questions or need assistance, don't hesitate to reach out.

Happy carousel building!
