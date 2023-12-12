import { CSSProperties } from 'react'
import { TransitionStrategyProps } from '../types'

export function fadeTransition({
  slideIndex,
  slidePercentage,
  slidesPerPage,
  slidesGap,
  isActive,
  orientation,
}: TransitionStrategyProps): CSSProperties {
  const positionAdjustment = `calc(${
    (slideIndex % slidesPerPage) * slidePercentage
  }% - ${slidesGap}px)`

  return {
    position: 'absolute',
    top: orientation === 'horizontal' ? 0 : positionAdjustment,
    left: orientation === 'horizontal' ? positionAdjustment : 0,
    opacity: isActive ? 1 : 0,
    zIndex: isActive ? 1 : 0,
  }
}
