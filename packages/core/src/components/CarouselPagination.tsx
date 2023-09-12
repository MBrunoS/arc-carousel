import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { CarouselPaginationItem } from './CarouselPaginationItem'

export interface CarouselPaginationProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  render?: (index: number) => JSX.Element
}

export const CarouselPagination = forwardRef<HTMLDivElement, CarouselPaginationProps>(
  ({ className, asChild, render, ...props }, ref) => {
    const { slideCount, slidesPerPage, orientation } = useContext(CarouselContext)
    const count = Math.ceil(slideCount / slidesPerPage)

    if (count <= 1) return null

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        className={cn(
          'flex gap-2 items-center justify-center transition duration-150 ease-in-out',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          className,
        )}
        ref={ref}
        {...props}
      >
        {Array.from({ length: count }).map((_, i) =>
          render ? render(i) : <CarouselPaginationItem key={i} index={i} />,
        )}
      </Comp>
    )
  },
)

CarouselPagination.displayName = 'CarouselPagination'
