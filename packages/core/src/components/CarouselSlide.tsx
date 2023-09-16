import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'
import { useSlideStyle } from './hooks/useSlideStyle'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  index?: number
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ index = 0, asChild, className, ...props }, ref) => {
    const { slidesPerPage, currentPage, orientation, transition, gap } = useContext(CarouselContext)

    const style = useSlideStyle({ gap, slidesPerPage, currentPage, orientation, transition, index })

    const Comp = asChild ? Slot : 'div'

    const isActive = index * slidesPerPage === currentPage

    return (
      <Comp
        className={cn('h-full flex-shrink-0 transition duration-300', className)}
        style={style}
        ref={ref}
        data-arc-index={index}
        data-arc-is-active={isActive}
        {...props}
      />
    )
  },
)

CarouselSlide.displayName = 'CarouselSlide'
