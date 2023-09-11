import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import React, { HTMLAttributes, forwardRef, useContext } from 'react'

export const carouselWrapperVariants = cva('relative flex w-full h-full overflow-hidden', {
  variants: {
    variant: {
      default: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CarouselWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselWrapperVariants> {
  gap?: number
  asChild?: boolean
}

export const CarouselWrapper = forwardRef<HTMLDivElement, CarouselWrapperProps>(
  ({ children, asChild, gap = 0, className, ...props }, ref) => {
    const { variant } = useContext(CarouselContext)

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
        className={cn(carouselWrapperVariants({ variant, className }))}
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
