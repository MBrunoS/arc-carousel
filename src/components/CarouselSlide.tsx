import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ asChild, className, ...props }, ref) => {
    const { slidesPerView } = useContext(CarouselContext)
    const slideWidth = 100 / slidesPerView
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        className={cn('h-full flex-shrink-0', className)}
        style={{ flexBasis: `${slideWidth}%` }}
        ref={ref}
        {...props}
      />
    )
  },
)

CarouselSlide.displayName = 'CarouselSlide'
