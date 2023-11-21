import { CSSProperties } from 'react'
import { TransitionStrategyProps } from '../types'

export function slideTransition({
  orientation,
  gap,
  currentPage,
  slidesPerPage,
  slidePercentage,
  slidesGap,
}: TransitionStrategyProps): CSSProperties {
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
