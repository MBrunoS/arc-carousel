import { CSSProperties } from 'react'
import { TransitionStrategyProps } from '../types'

export function slideTransition({
  orientation,
  gap,
  currentPage,
  slidesPerPage,
}: TransitionStrategyProps): CSSProperties {
  const axis = orientation === 'horizontal' ? 'X' : 'Y'

  return {
    transform: `translate${axis}(calc(${currentPage * slidesPerPage * -100}% - ${
      gap * currentPage * slidesPerPage
    }px))`,
  }
}
