import { CSSProperties } from 'react'

export type Transition = 'slide' | 'fade' | 'flip'

export type Orientation = 'horizontal' | 'vertical'

export type TransitionStrategies = {
  [key in Transition]: TransitionStrategy
}

export type TransitionStrategy = (props: TransitionStrategyProps) => CSSProperties

export type TransitionStrategyProps = {
  orientation: Orientation
  gap: number
  currentPage: number
  slidesPerPage: number
  slideIndex: number
  slidePercentage: number
  slidesGap: number
  isActive: boolean
}
