import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React, { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselWrapperProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselWrapper = forwardRef<HTMLDivElement, CarouselWrapperProps>(
  ({ children, asChild, className, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const { orientation, gap, isAutoplaying, isPaused, stopAutoplay, startAutoplay, autoplay } =
      useContext(CarouselContext)

    const Comp = asChild ? Slot : 'div'

    const mappedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child as React.ReactElement, {
        key: index,
        index,
      })
    })

    const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (autoplay && isAutoplaying && !isPaused) {
        stopAutoplay()
      }
      onMouseEnter?.(e)
    }

    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (autoplay && !isAutoplaying && !isPaused) {
        startAutoplay()
      }
      onMouseLeave?.(e)
    }

    return (
      <Comp
        className={cn(
          'arc-relative arc-flex arc-w-full arc-h-full arc-overflow-hidden',
          orientation === 'vertical' ? 'arc-flex-col' : 'arc-flex-row',
          className,
        )}
        style={{ gap: `${gap}px` }}
        ref={ref}
        role="region"
        aria-atomic="false"
        aria-live={isAutoplaying ? 'off' : 'polite'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {mappedChildren}
      </Comp>
    )
  },
)

CarouselWrapper.displayName = 'CarouselWrapper'
