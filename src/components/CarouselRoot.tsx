import React, { HTMLAttributes, forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CarouselContext } from 'src/context/CarouselContext'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export const carouselRootVariants = cva('flex overflow-x-auto', {
  variants: {
    variant: {
      default: 'flex w-full gap-2 overflow-x-auto',
      vertical: 'flex flex-col overflow-y-auto',
      full: 'flex flex-col overflow-y-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CarouselRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselRootVariants> {
  asChild?: boolean
}

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselRootProps>(
  ({ variant, className, children, asChild = false, ...props }, ref) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideCount = React.Children.count(children)

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slideCount)
    }

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
    }

    const Comp = asChild ? Slot : 'div'

    return (
      <CarouselContext.Provider value={{ variant, currentSlide, prevSlide, nextSlide, slideCount }}>
        <Comp className={cn(carouselRootVariants({ variant, className }))} ref={ref} {...props}>
          {children}
        </Comp>
      </CarouselContext.Provider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
