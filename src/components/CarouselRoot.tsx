import React, { HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CarouselProvider } from 'src/context/CarouselContext'
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
    const Comp = asChild ? Slot : 'div'
    const slideCount = React.Children.count(children)

    return (
      <CarouselProvider slideCount={slideCount}>
        <Comp className={cn(carouselRootVariants({ variant, className }))} ref={ref} {...props}>
          {children}
        </Comp>
      </CarouselProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
