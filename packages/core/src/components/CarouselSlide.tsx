import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { useSlideStyle } from './internal/hooks/useSlideStyle'
import { useEvents } from '@/context/EventsContext'
import { useSwipe } from './internal/hooks/useSwipe'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  slideIndex?: number
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ slideIndex = 0, asChild, className, onClick, onFocus, style: styleProps, ...props }, ref) => {
    const {
      slideCount,
      slidesPerPage,
      currentPage,
      orientation,
      transition,
      transitionDuration,
      gap,
      next,
      prev,
      setCurrentPage,
    } = useContext(CarouselContext)
    const { onSlideClick, onPageChangeEnd } = useEvents()

    const firstSlideOnPage = currentPage * slidesPerPage
    const lastSlideOnPage = (currentPage + 1) * slidesPerPage - 1

    const isActive = slideIndex >= firstSlideOnPage && slideIndex <= lastSlideOnPage

    const style = useSlideStyle({
      gap,
      slidesPerPage,
      currentPage,
      orientation,
      transition,
      slideIndex,
      isActive,
    })

    const Comp = asChild ? Slot : 'div'

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e)
      onSlideClick?.(slideIndex, e)
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

    const handleFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
      if (!isActive) {
        setCurrentPage(Math.floor(slideIndex / slidesPerPage))
      }
      onFocus?.(e)
    }

    return (
      <Comp
        className={cn('arc-h-full arc-flex-shrink-0 arc-transition', className)}
        style={{ ...styleProps, ...style, transitionDuration: `${transitionDuration}ms` }}
        ref={ref}
        data-arc-index={slideIndex}
        data-arc-is-active={isActive}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
        onFocus={handleFocus}
        role="group"
        aria-roledescription="slide"
        aria-label={`${slideIndex + 1} of ${slideCount}`}
        {...touchHandlers}
        {...props}
      />
    )
  },
)

CarouselSlide.displayName = 'CarouselSlide'
