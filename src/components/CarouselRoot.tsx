import React, { HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CarouselProvider } from 'src/context/CarouselContext'
import { Slot } from '@radix-ui/react-slot'
import { cn, filterChildren } from '@/lib/utils'
import { CarouselPagination } from './CarouselPagination'
import { CarouselPrevButton } from './CarouselPrevButton'
import { CarouselNextButton } from './CarouselNextButton'
import { CarouselSlide } from './CarouselSlide'

export const carouselRootVariants = cva('flex overflow-x-auto', {
  variants: {
    variant: {
      default: 'flex w-full gap-2 overflow-x-auto',
      stacked: 'flex w-full overflow-x-auto',
      // vertical: 'flex flex-col overflow-y-auto',
      // full: 'flex flex-col overflow-y-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CarouselRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselRootVariants> {
  slidesPerView?: number
  asChild?: boolean
}

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselRootProps>(
  ({ slidesPerView, variant, className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    let filteredChildren = children

    if (variant === 'default' || variant == undefined) {
      filteredChildren = filterChildren(children, CarouselSlide)
    }

    const slideCount = React.Children.count(filteredChildren)

    return (
      <CarouselProvider slideCount={slideCount} slidesPerView={slidesPerView}>
        <Comp className={cn(carouselRootVariants({ variant, className }))} ref={ref} {...props}>
          <div className="flex w-full gap-4">
            <CarouselPrevButton />
            {filteredChildren}
            <CarouselNextButton />
          </div>
          <CarouselPagination />
        </Comp>
      </CarouselProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
