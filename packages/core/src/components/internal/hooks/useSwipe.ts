import { TouchEvent, useState } from 'react'
import { Orientation } from '../types'

interface SwipeInput {
  orientation: Orientation
  onSwipedToPrev: () => void
  onSwipedToNext: () => void
}

interface TouchHandlers {
  onTouchStart: (e: TouchEvent) => void
  onTouchMove: (e: TouchEvent) => void
  onTouchEnd: () => void
}

export function useSwipe({
  onSwipedToPrev,
  onSwipedToNext,
  orientation,
}: SwipeInput): TouchHandlers {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const minSwipeDistance = 50

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0) // otherwise the swipe is fired even with usual touch events
    if (orientation === 'horizontal') {
      setTouchStart(e.targetTouches[0].clientX)
    } else {
      setTouchStart(e.targetTouches[0].clientY)
    }
  }

  const onTouchMove = (e: TouchEvent) => {
    if (orientation === 'horizontal') {
      setTouchEnd(e.targetTouches[0].clientX)
    } else {
      setTouchEnd(e.targetTouches[0].clientY)
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd

    if (orientation === 'horizontal') {
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isLeftSwipe) {
        onSwipedToNext()
      }
      if (isRightSwipe) {
        onSwipedToPrev()
      }
    } else {
      const isUpSwipe = distance > minSwipeDistance
      const isDownSwipe = distance < -minSwipeDistance
      if (isDownSwipe) {
        onSwipedToPrev()
      }
      if (isUpSwipe) {
        onSwipedToNext()
      }
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
