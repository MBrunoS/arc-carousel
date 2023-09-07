# ARC Carousel

Carousel React component styled with TailwindCSS, with accessibility in mind.

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
      <Carousel.Slide>Slide 1</Carousel.Slide>
      <Carousel.Slide>Slide 2</Carousel.Slide>
      <Carousel.Slide>Slide 3</Carousel.Slide>
    </Carousel.Root>
  )
}

export default App
```

## API

### Carousel.Root

#### Props

| Name                 | Type                      | Default                  | Description                                                         |
| -------------------- | ------------------------- | ------------------------ | ------------------------------------------------------------------- |
| `className`          | `string`                  | `''`                     | Class name to be applied to the root element.                       |
| `children`           | `React.ReactNode`         | `null`                   | Slides to be rendered.                                              |
| `initialSlide`       | `number`                  | `0`                      | Index of the slide to be rendered initially.                        |
| `onSlideChange`      | `(index: number) => void` | `() => {}`               | Callback to be called when the slide changes.                       |
| `onSlideChangeEnd`   | `(index: number) => void` | `() => {}`               | Callback to be called when the slide change ends.                   |
| `onSlideChangeStart` | `(index: number) => void` | `() => {}`               | Callback to be called when the slide change starts.                 |
| `onSlideClick`       | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is clicked.                      |
| `onSlideFocus`       | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is focused.                      |
| `onSlideKeyDown`     | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is focused and a key is pressed. |
| `onSlideMouseEnter`  | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is hovered.                      |
| `onSlideMouseLeave`  | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is not hovered anymore.          |
| `onSlideTouchEnd`    | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is touched.                      |
| `onSlideTouchMove`   | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is touched and moved.            |
| `onSlideTouchStart`  | `(index: number) => void` | `() => {}`               | Callback to be called when a slide is touched and the touch starts. |
| `slideDuration`      | `number`                  | `500`                    | Duration of the slide animation in milliseconds.                    |
| `slideEasing`        | `string`                  | `'ease'`                 | Easing function to be used for the slide animation.                 |
| `slideIndex`         | `number`                  | `0`                      | Index of the slide to be rendered.                                  |
| `slideInterval`      | `number`                  | `0`                      | Interval in milliseconds between slide changes.                     |
| `slideLoop`          | `boolean`                 | `false`                  | Whether the slides should loop.                                     |
| `slideTransition`    | `string`                  | `'transform 500ms ease'` | CSS transition to be applied to the slides.                         |

### Carousel.Slide

#### Props

| Name              | Type              | Default                  | Description                                                           |
| ----------------- | ----------------- | ------------------------ | --------------------------------------------------------------------- |
| `className`       | `string`          | `''`                     | Class name to be applied to the slide element.                        |
| `children`        | `React.ReactNode` | `null`                   | Content to be rendered inside the slide.                              |
| `index`           | `number`          | `0`                      | Index of the slide.                                                   |
| `onClick`         | `() => void`      | `() => {}`               | Callback to be called when the slide is clicked.                      |
| `onFocus`         | `() => void`      | `() => {}`               | Callback to be called when the slide is focused.                      |
| `onKeyDown`       | `() => void`      | `() => {}`               | Callback to be called when the slide is focused and a key is pressed. |
| `onMouseEnter`    | `() => void`      | `() => {}`               | Callback to be called when the slide is hovered.                      |
| `onMouseLeave`    | `() => void`      | `() => {}`               | Callback to be called when the slide is not hovered anymore.          |
| `onTouchEnd`      | `() => void`      | `() => {}`               | Callback to be called when the slide is touched.                      |
| `onTouchMove`     | `() => void`      | `() => {}`               | Callback to be called when the slide is touched and moved.            |
| `onTouchStart`    | `() => void`      | `() => {}`               | Callback to be called when the slide is touched and the touch starts. |
| `slideDuration`   | `number`          | `500`                    | Duration of the slide animation in milliseconds.                      |
| `slideEasing`     | `string`          | `'ease'`                 | Easing function to be used for the slide animation.                   |
| `slideIndex`      | `number`          | `0`                      | Index of the slide to be rendered.                                    |
| `slideInterval`   | `number`          | `0`                      | Interval in milliseconds between slide changes.                       |
| `slideLoop`       | `boolean`         | `false`                  | Whether the slides should loop.                                       |
| `slideTransition` | `string`          | `'transform 500ms ease'` | CSS transition to be applied to the slides.                           |
