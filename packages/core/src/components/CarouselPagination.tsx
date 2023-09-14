import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { CarouselPaginationItem } from './CarouselPaginationItem'

export interface CarouselPaginationProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  render?: (index: number, isActive: boolean) => JSX.Element
}

export const CarouselPagination = forwardRef<HTMLDivElement, CarouselPaginationProps>(
  ({ className, asChild, render, ...props }, ref) => {
    const { pagesCount, slidesPerPage, orientation, currentPage } = useContext(CarouselContext)

    if (pagesCount <= 1) return null

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        className={cn('flex', orientation === 'vertical' ? 'flex-col' : 'flex-row', className)}
        ref={ref}
        {...props}
      >
        {Array.from({ length: pagesCount }).map((_, i) =>
          render ? (
            render(i, i * slidesPerPage === currentPage)
          ) : (
            <CarouselPaginationItem key={i} index={i} />
          ),
        )}
      </Comp>
    )
  },
)

CarouselPagination.displayName = 'CarouselPagination'
