import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { PaginationItem } from './internal'

export interface CarouselPaginationProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselPagination = forwardRef<HTMLDivElement, CarouselPaginationProps>(
  ({ className, asChild, ...props }, ref) => {
    const { slideCount, slidesPerView } = useContext(CarouselContext)
    const count = Math.ceil(slideCount / slidesPerView)

    if (count <= 1) return null

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        className={cn(
          'flex items-center justify-center gap-2 transition duration-150 ease-in-out',
          className,
        )}
        ref={ref}
        {...props}
      >
        {Array.from({ length: count }).map((_, i) => (
          <PaginationItem key={i} index={i} />
        ))}
      </Comp>
    )
  },
)

CarouselPagination.displayName = 'CarouselPagination'
