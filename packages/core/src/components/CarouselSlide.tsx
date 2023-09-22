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
    const { slidesPerPage, currentPage, orientation, transition, gap, next, prev } =
      useContext(CarouselContext)
    const { onSlideClick } = useEvents()

    const style = useSlideStyle({ gap, slidesPerPage, currentPage, orientation, transition, index })

    const Comp = asChild ? Slot : 'div'

    const isActive = index * slidesPerPage === currentPage

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e)
      onSlideClick?.(index, e)
    }

    const touchHandlers = useSwipe({
      onSwipedToNext: next,
      onSwipedToPrev: prev,
      orientation,
    })

    return (
      <Comp
        className={cn('h-full flex-shrink-0 transition duration-300', className)}
        style={style}
        ref={ref}
        data-arc-index={index}
        data-arc-is-active={isActive}
        onClick={handleClick}
        {...touchHandlers}
        {...props}
      />
    )
  },
)

CarouselSlide.displayName = 'CarouselSlide'
