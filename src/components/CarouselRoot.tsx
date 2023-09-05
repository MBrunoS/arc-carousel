import React, { HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CarouselProvider } from 'src/context/CarouselContext'
import { Slot } from '@radix-ui/react-slot'
import { cn, filterChildren } from '@/lib/utils'
import { CarouselPagination } from './CarouselPagination'
import { CarouselPrevButton } from './CarouselPrevButton'
import { CarouselNextButton } from './CarouselNextButton'
import { CarouselSlide } from './CarouselSlide'

export const carouselRootVariants = cva('flex', {
  variants: {
    variant: {
      default: 'flex flex-col w-full h-full items-center gap-4',
      stacked: 'flex w-full',
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
    const slideContainerRef = React.useRef<HTMLDivElement>(null)

    let filteredChildren = children

    if (variant === 'default' || variant == undefined) {
      filteredChildren = filterChildren(children, CarouselSlide)
    }

    const slideCount = React.Children.count(filteredChildren)

    const mappedChildren = React.Children.map(filteredChildren, (child, index) => {
      return React.cloneElement(child as React.ReactElement, {
        'data-arc-index': index,
        key: index,
      })
    })

    return (
      <CarouselProvider slideCount={slideCount} slidesPerView={slidesPerView}>
        <Comp className={cn(carouselRootVariants({ variant, className }))} ref={ref} {...props}>
          <div className="flex items-center w-full h-full gap-4">
            <CarouselPrevButton />

            <div className="relative flex w-full h-full overflow-clip" ref={slideContainerRef}>
              {mappedChildren}
            </div>

            <CarouselNextButton />
          </div>

          <CarouselPagination />
        </Comp>
      </CarouselProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
