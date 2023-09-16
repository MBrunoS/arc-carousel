import { CSSProperties } from 'react'

type UseSlideStyleProps = {
  orientation: 'horizontal' | 'vertical'
  transition: 'slide' | 'fade'
  gap: number
  currentPage: number
  slidesPerPage: number
  index: number
}

export function useSlideStyle({
  orientation,
  transition,
  gap,
  currentPage,
  slidesPerPage,
  index,
}: UseSlideStyleProps): CSSProperties {
  const slidePercentage = 100 / slidesPerPage
  const slidesGap = (slidesPerPage * gap - gap) / slidesPerPage // adjustment for the gap between slides

  if (transition === 'slide') {
    if (orientation === 'horizontal') {
      return {
        width: `calc(${slidePercentage}% - ${slidesGap}px)`,
        transform: `translateX(calc(${currentPage * slidesPerPage * -100}% - ${
          gap * currentPage * slidesPerPage
        }px))`,
      }
    }

    // vertical
    return {
      height: `calc(${slidePercentage}% - ${slidesGap}px)`,
      transform: `translateY(calc(${currentPage * slidesPerPage * -100}% - ${
        gap * currentPage * slidesPerPage
      }px))`,
    }
  }

  // fade
  const isActive = index * slidesPerPage === currentPage

  return {
    position: 'absolute',
    inset: 0,
    opacity: isActive ? 1 : 0,
    zIndex: isActive ? 1 : 0,
  }
}
