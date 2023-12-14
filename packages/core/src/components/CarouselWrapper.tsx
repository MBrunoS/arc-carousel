import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React, { CSSProperties, HTMLAttributes, forwardRef, useContext } from 'react'
import { flipTransitionWrapperStyles } from './internal/transitions/flip'

export interface CarouselWrapperProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselWrapper = forwardRef<HTMLDivElement, CarouselWrapperProps>(
  (
    { children, asChild, className, onMouseEnter, onMouseLeave, style: styleProps, ...props },
    ref,
  ) => {
    const {
      transition,
      orientation,
      gap,
      isAutoplaying,
      isPaused,
      stopAutoplay,
      startAutoplay,
      autoplay,
    } = useContext(CarouselContext)

    const Comp = asChild ? Slot : 'div'

    const mappedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child as React.ReactElement, {
        key: index,
        slideIndex: index,
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

    let styles: CSSProperties = {}

    if (transition === 'flip') {
      styles = {
        ...flipTransitionWrapperStyles,
        ...styleProps,
        gap: `${gap}px`,
      }
    } else {
      styles = {
        ...styleProps,
        gap: `${gap}px`,
      }
    }

    return (
      <Comp
        className={cn(
          'relative flex w-full h-full overflow-hidden',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          className,
        )}
        style={styles}
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
