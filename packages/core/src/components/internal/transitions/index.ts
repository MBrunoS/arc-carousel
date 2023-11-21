import { TransitionStrategies } from '../types'
import { fadeTransition } from './fade'
import { flipTransition } from './flip'
import { slideTransition } from './slide'

export const transitionStrategies: TransitionStrategies = {
  slide: slideTransition,
  fade: fadeTransition,
  flip: flipTransition,
}
