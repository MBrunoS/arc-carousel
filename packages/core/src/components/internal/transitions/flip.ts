import { CSSProperties } from 'react'
import { TransitionStrategyProps } from '../types'

// TODO: fix transition to flip properly  when going to a slide
// that is not adjacent to the current one
export function flipTransition({
  orientation,
  currentPage,
  slidesPerPage,
  slideIndex,
  slidePercentage,
  slidesGap,
  isActive,
}: TransitionStrategyProps): CSSProperties {
  const positionAdjustment = `calc(${
    (slideIndex % slidesPerPage) * slidePercentage
  }% - ${slidesGap}px)`
  const axis = orientation === 'horizontal' ? 'X' : 'Y'

  const pageIndex = Math.floor(slideIndex / slidesPerPage)
  const isPreviousPages = pageIndex < currentPage
  const isNextPages = pageIndex > currentPage

  return {
    position: 'absolute',
    top: orientation === 'horizontal' ? 0 : positionAdjustment,
    left: orientation === 'horizontal' ? positionAdjustment : 0,
    backfaceVisibility: 'hidden',
    transform: `rotate${axis}(${isPreviousPages ? 180 : isNextPages ? -180 : 0}deg)`,
    zIndex: isActive ? 1 : 0,
  }
}

export const flipTransitionWrapperStyles: CSSProperties = {
  perspective: 1000,
  transformStyle: 'preserve-3d',
  overflow: 'visible',
}
