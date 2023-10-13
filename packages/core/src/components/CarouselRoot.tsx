import { HTMLAttributes, forwardRef } from 'react'
import { CarouselProvider } from 'src/context/CarouselContext'
import { Slot } from '@radix-ui/react-slot'
import { cn, countGrandChildrenOfType, filterChildren } from '@/lib/utils'
import { CarouselWrapper } from './CarouselWrapper'
import { CarouselSlide } from './CarouselSlide'
import { Events } from '../types/Events'
import { EventsProvider } from '@/context/EventsContext'

export interface CarouselRootProps extends HTMLAttributes<HTMLDivElement>, Events {
  orientation?: 'horizontal' | 'vertical'
  slidesPerPage?: number
  initialPage?: number
  hasLoop?: boolean
  asChild?: boolean
  transition?: 'slide' | 'fade'
  transitionDuration?: number
  gap?: number
  autoplay?: boolean
  autoplayInterval?: number
}

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselRootProps>(
  (
    {
      orientation = 'horizontal',
      slidesPerPage = 1,
      initialPage = 0,
      hasLoop = false,
      transition = 'slide',
      transitionDuration = 300,
      gap = 0,
      className,
      children,
      asChild = false,
      onSlideClick,
      onPageChange,
      onPageChangeEnd,
      autoplay = false,
      autoplayInterval = 3000,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'

    const wrappers = filterChildren(children, CarouselWrapper)

    if (wrappers.length !== 1) {
      throw new Error('CarouselRoot must have only one CarouselWrapper child')
    }

    const wrapper = wrappers[0]

    const slideCount = countGrandChildrenOfType(wrapper, CarouselSlide)
    const pagesCount = Math.ceil(slideCount / slidesPerPage)

    return (
      <EventsProvider
        onSlideClick={onSlideClick}
        onPageChange={onPageChange}
        onPageChangeEnd={onPageChangeEnd}
      >
        <CarouselProvider
          orientation={orientation}
          pagesCount={pagesCount}
          slidesPerPage={slidesPerPage}
          initialPage={initialPage}
          hasLoop={hasLoop}
          transition={transition}
          transitionDuration={transitionDuration}
          gap={gap}
          autoplay={autoplay}
          autoplayInterval={autoplayInterval}
        >
          <Comp className={cn('arc-flex', className)} ref={ref} {...props}>
            {children}
          </Comp>
        </CarouselProvider>
      </EventsProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
