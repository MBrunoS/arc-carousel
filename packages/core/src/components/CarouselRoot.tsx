import React, { HTMLAttributes, forwardRef } from 'react'
import { CarouselProvider } from 'src/context/CarouselContext'
import { Slot } from '@radix-ui/react-slot'
import { cn, countGrandChildrenOfType, filterChildren } from '@/lib/utils'
import { CarouselWrapper } from './CarouselWrapper'
import { CarouselSlide } from './CarouselSlide'

export interface CarouselRootProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  slidesPerPage?: number
  initialPage?: number
  hasLoop?: boolean
  asChild?: boolean
  transition?: 'slide' | 'fade'
}

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselRootProps>(
  (
    {
      orientation = 'horizontal',
      slidesPerPage = 1,
      initialPage = 0,
      hasLoop = false,
      transition = 'slide',
      className,
      children,
      asChild = false,
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
      <CarouselProvider
        orientation={orientation}
        pagesCount={pagesCount}
        slidesPerPage={slidesPerPage}
        initialPage={initialPage}
        hasLoop={hasLoop}
        transition={transition}
      >
        <Comp className={cn('flex', className)} ref={ref} {...props}>
          {children}
        </Comp>
      </CarouselProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
