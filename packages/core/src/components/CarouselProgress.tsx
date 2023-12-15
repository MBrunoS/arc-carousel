import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselProgressProps extends HTMLAttributes<HTMLProgressElement> {
  asChild?: boolean
}

export const CarouselProgress = forwardRef<HTMLProgressElement, CarouselProgressProps>(
  ({ asChild, className, ...props }, ref) => {
    const { pagesCount, currentPage, orientation } = useContext(CarouselContext)

    if (pagesCount <= 1) return null

    const Comp = asChild ? Slot : 'progress'

    return (
      <Comp
        className={cn(
          'rounded-full h-1 w-full [&::-webkit-progress-value]:transition-[width] [&::-moz-progress-value]:transition-[width] duration-150 ease-in-out',
          orientation === 'vertical' ? 'rotate-90 origin-left' : '',
          className,
        )}
        max={pagesCount}
        value={currentPage + 1}
        ref={ref}
        {...props}
      />
    )
  },
)

CarouselProgress.displayName = 'CarouselProgress'
