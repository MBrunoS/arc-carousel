import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { useSlideStyle } from './internal/hooks/useSlideStyle'
import { useEvents } from '@/context/EventsContext'
import { useSwipe } from './internal/hooks/useSwipe'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  index?: number
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ index = 0, asChild, className, onClick, ...props }, ref) => {
    const {
      slidesPerPage,
      currentPage,
      orientation,
      transition,
      transitionDuration,
      gap,
      next,
      prev,
    } = useContext(CarouselContext)
    const { onSlideClick, onPageChangeEnd } = useEvents()

    const style = useSlideStyle({ gap, slidesPerPage, currentPage, orientation, transition, index })

    const Comp = asChild ? Slot : 'div'

    const isActive = index / slidesPerPage === currentPage

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e)
      onSlideClick?.(index, e)
    }

    const touchHandlers = useSwipe({
      onSwipedToNext: next,
      onSwipedToPrev: prev,
      orientation,
    })

    const handleTransitionEnd = () => {
      if (!isActive) return
      onPageChangeEnd?.(currentPage)
    }

    return (
      <Comp
        className={cn('h-full flex-shrink-0 transition', className)}
        style={{ ...style, transitionDuration: `${transitionDuration}ms` }}
        ref={ref}
        data-arc-index={index}
        data-arc-is-active={isActive}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
        {...touchHandlers}
        {...props}
      />
    )
  },
)

CarouselSlide.displayName = 'CarouselSlide'
