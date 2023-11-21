import { CSSProperties } from 'react'
import { TransitionStrategyProps } from '../types'

export function flipTransition({
  orientation,
  currentPage,
  slidesPerPage,
  index,
}: TransitionStrategyProps): CSSProperties {
  const isPrevious = index * slidesPerPage < currentPage
  const isNext = index * slidesPerPage > currentPage

  return {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    transform: `rotate${orientation === 'horizontal' ? 'Y' : 'X'}(${
      isPrevious ? 180 : isNext ? -180 : 0
    }deg)`,
  }
}

export const flipTransitionWrapperStyles: CSSProperties = {
  perspective: 1000,
  transformStyle: 'preserve-3d',
  overflow: 'visible',
}
