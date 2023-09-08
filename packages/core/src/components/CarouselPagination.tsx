import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { PaginationItem } from './internal'
import { VariantProps, cva } from 'class-variance-authority'

export const carouselPaginationVariants = cva(
  'flex gap-2 items-center justify-center transition duration-150 ease-in-out',
  {
    variants: {
      variant: {
        default: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface CarouselPaginationProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselPaginationVariants> {
  asChild?: boolean
}

export const CarouselPagination = forwardRef<HTMLDivElement, CarouselPaginationProps>(
  ({ className, asChild, ...props }, ref) => {
    const { slideCount, slidesPerView, variant } = useContext(CarouselContext)
    const count = Math.ceil(slideCount / slidesPerView)

    if (count <= 1) return null

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp className={cn(carouselPaginationVariants({ variant, className }))} ref={ref} {...props}>
        {Array.from({ length: count }).map((_, i) => (
          <PaginationItem key={i} index={i} />
        ))}
      </Comp>
    )
  },
)

CarouselPagination.displayName = 'CarouselPagination'
