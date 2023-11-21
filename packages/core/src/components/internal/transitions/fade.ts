import { CSSProperties } from 'react'
import { TransitionStrategyProps } from '../types'

export function fadeTransition({
  index,
  currentPage,
  slidesPerPage,
}: TransitionStrategyProps): CSSProperties {
  const isActive = index * slidesPerPage === currentPage

  return {
    position: 'absolute',
    inset: 0,
    opacity: isActive ? 1 : 0,
    zIndex: isActive ? 1 : 0,
  }
}
