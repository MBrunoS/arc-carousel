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
        className={cn('flex-grow h-1 rounded-full overflow-hidden', className)}
        ref={ref}
        {...props}
      >
        {render ? (
          render(progress)
        ) : (
          <progress
            className="block h-full bg-black transition-[width] duration-150 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        )}
      </Comp>
    )
  },
)

CarouselProgress.displayName = 'CarouselProgress'
