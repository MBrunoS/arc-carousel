import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React, { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselWrapperProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number
  asChild?: boolean
}

export const CarouselWrapper = forwardRef<HTMLDivElement, CarouselWrapperProps>(
  ({ children, asChild, gap = 0, className, ...props }, ref) => {
    const { orientation } = useContext(CarouselContext)

    const Comp = asChild ? Slot : 'div'

    const mappedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child as React.ReactElement, {
        'data-arc-index': index,
        key: index,
        gap,
      })
    })

    return (
      <Comp
        className={cn(
          'relative flex w-full h-full overflow-hidden',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          className,
        )}
        style={{ gap: `${gap}px` }}
        ref={ref}
        {...props}
      >
        {mappedChildren}
      </Comp>
    )
  },
)

CarouselWrapper.displayName = 'CarouselWrapper'
