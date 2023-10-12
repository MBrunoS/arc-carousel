---
title: Key Concepts
description: Explanation of key concepts in the Arc Carousel library.
---

When working with the Arc Carousel library, there are several key concepts and terms that you should be familiar with. Understanding these concepts will help you use the library effectively and customize your carousels to meet your specific requirements.

## Carousel Root

The `Carousel.Root` component is the top-level container for your carousel. It provides a context for all the carousel components and configuration options. It's where you define properties like the carousel's orientation, the number of slides per page, and more.

```jsx
<Carousel.Root orientation="horizontal" slidesPerPage={1}>
  {/* ... */}
</Carousel.Root>
```

## Carousel Wrapper

The `Carousel.Wrapper` component serves as a container for your carousel slides. You can place your individual carousel items inside this wrapper. It defines the space where the slides are displayed and aligned.

```jsx
<Carousel.Wrapper>
  <Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
  <Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
</Carousel.Wrapper>
```

## Carousel Slide

Each individual item in your carousel is represented by the `Carousel.Slide` component. You can place content, images, or other elements within these slides. These are the items that your users will interact with as they navigate the carousel.

```jsx
<Carousel.Slide>{/* Add your carousel item here */}</Carousel.Slide>
```

## Carousel Navigation

Arc Carousel provides built-in navigation components to allow users to interact with the carousel. These include:

- `Carousel.PrevButton`: A button to navigate to the previous slide.
- `Carousel.NextButton`: A button to navigate to the next slide.
- `Carousel.Pagination`: Component that displays pagination indicators for the slides.
- `Carousel.PaginationItem`: Component that renders a pagination item, may be used to customize each item.
- `Carousel.PlayPauseButton`: A button to control the autoplay functionality.

```jsx
<Carousel.PrevButton />
<Carousel.Pagination render={<Carousel.PaginationItem />} />
<Carousel.NextButton />
<Carousel.PlayPauseButton />
```

## Configuration Options

Arc Carousel comes with various configuration options that allow you to customize the behavior and appearance of your carousel. Some of these options include:

- `orientation`: Specifies whether the carousel should be horizontal or vertical.
- `slidesPerPage`: Determines the number of slides displayed on a single page.
- `transition`: Defines the type of transition between slides (e.g., slide or fade).
- `autoplay`: Controls whether the carousel should automatically advance.
- `gap`: Sets the gap between slides, if needed.
- and more...

```jsx
<Carousel.Root
  orientation="horizontal"
  slidesPerPage={1}
  transition="slide"
  autoplay={true}
  gap={10}
>
  {/* ... */}
</Carousel.Root>
```

By understanding these key concepts, you'll be better equipped to configure and use the Arc Carousel library in your React application. Feel free to explore our [API Reference](/reference/carousel-root/) for more detailed information on these concepts and additional customization options.
