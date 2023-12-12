import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselProgressProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  render?: (progress: number) => JSX.Element
}

export const CarouselProgress = forwardRef<HTMLDivElement, CarouselProgressProps>(
  ({ asChild, render, className, ...props }, ref) => {
    const { pagesCount, currentPage } = useContext(CarouselContext)

    if (pagesCount <= 1) return null

    const progress = ((currentPage + 1) / pagesCount) * 100

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        className={cn('arc-flex-grow arc-h-1 arc-rounded-full arc-overflow-hidden', className)}
        ref={ref}
        {...props}
      >
        {render ? (
          render(progress)
        ) : (
          <div
            className="arc-h-full arc-bg-black arc-transition-[width] arc-duration-150 arc-ease-in-out"
            style={{ width: `${progress}%` }}
          />
        )}
      </Comp>
    )
  },
)

CarouselProgress.displayName = 'CarouselProgress'
