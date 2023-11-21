import { CSSProperties } from 'react'
import { transitionStrategies } from '../transitions'
import { Orientation, Transition } from '../types'

type UseSlideStyleProps = {
  orientation: Orientation
  transition: Transition
  gap: number
  currentPage: number
  slidesPerPage: number
  index: number
  isActive: boolean
}

export function useSlideStyle({
  orientation,
  transition,
  gap,
  currentPage,
  slidesPerPage,
  index,
  isActive,
}: UseSlideStyleProps): CSSProperties {
  const slidePercentage = 100 / slidesPerPage
  const slidesGap = (slidesPerPage * gap - gap) / slidesPerPage // adjustment for the gap between slides

  const transitionStrategy = transitionStrategies[transition]

  const transitionStyles = transitionStrategy({
    orientation,
    gap,
    currentPage,
    slidesPerPage,
    slidePercentage,
    slidesGap,
    index,
    isActive,
  })

  if (orientation === 'horizontal') {
    return {
      width: `calc(${slidePercentage}% - ${slidesGap}px)`,
      ...transitionStyles,
    }
  }

  // vertical
  return {
    height: `calc(${slidePercentage}% - ${slidesGap}px)`,
    ...transitionStyles,
  }
}
