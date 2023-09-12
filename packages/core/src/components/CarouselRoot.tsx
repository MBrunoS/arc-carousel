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
  asChild?: boolean
}

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselRootProps>(
  (
    {
      orientation = 'horizontal',
      slidesPerPage,
      initialPage,
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

    return (
      <CarouselProvider
        orientation={orientation}
        slideCount={slideCount}
        slidesPerPage={slidesPerPage}
        initialPage={initialPage}
      >
        <Comp className={cn('flex', className)} ref={ref} {...props}>
          {children}
        </Comp>
      </CarouselProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
