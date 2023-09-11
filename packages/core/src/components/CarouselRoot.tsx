import React, { HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CarouselProvider } from 'src/context/CarouselContext'
import { Slot } from '@radix-ui/react-slot'
import { cn, countGrandChildrenOfType, filterChildren } from '@/lib/utils'
import { CarouselPagination } from './CarouselPagination'
import { CarouselPrevButton } from './CarouselPrevButton'
import { CarouselNextButton } from './CarouselNextButton'
import { CarouselWrapper } from './CarouselWrapper'
import { CarouselSlide } from './CarouselSlide'

export const carouselRootVariants = cva('flex w-full h-full items-center gap-4', {
  variants: {
    variant: {
      default: 'flex-col',
      vertical: 'flex-row',
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

    const filteredChildren = filterChildren(children, CarouselWrapper)

    if (filteredChildren.length !== 1) {
      throw new Error('CarouselRoot must have exactly one CarouselWrapper child')
    }

    const wrapper = filteredChildren[0]

    const slideCount = countGrandChildrenOfType(wrapper, CarouselSlide)

    return (
      <CarouselProvider slideCount={slideCount} slidesPerView={slidesPerView} variant={variant}>
        <Comp className={cn(carouselRootVariants({ variant, className }))} ref={ref} {...props}>
          <div
            className={cn(
              'relative flex items-center w-full h-full gap-4',
              variant === 'vertical' ? 'flex-col' : 'flex-row',
            )}
          >
            <CarouselPrevButton
              className={cn(
                'absolute z-10 md:static bg-white/20',
                variant === 'vertical' ? 'top-2' : 'left-2',
              )}
            />

            {wrapper}

            <CarouselNextButton
              className={cn(
                'absolute z-10 md:static bg-white/20',
                variant === 'vertical' ? 'bottom-2' : 'right-2',
              )}
            />
          </div>

          <CarouselPagination />
        </Comp>
      </CarouselProvider>
    )
  },
)

CarouselRoot.displayName = 'CarouselRoot'
