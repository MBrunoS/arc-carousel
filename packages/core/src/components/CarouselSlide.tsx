import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ asChild, className, gap = 0, ...props }, ref) => {
    const { slidesPerPage, currentPage, orientation } = useContext(CarouselContext)
    const slidePercentage = 100 / slidesPerPage
    const style =
      orientation === 'vertical'
        ? {
            height: `${slidePercentage}%`,
            transform: `translateY(calc(${currentPage * -slidePercentage}% - ${
              gap * currentPage
            }px))`,
          }
        : {
            width: `${slidePercentage}%`,
            transform: `translateX(calc(${currentPage * -slidePercentage}% - ${
              gap * currentPage
            }px))`,
          }

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        className={cn('h-full flex-shrink-0 transition-transform duration-300', className)}
        style={style}
        ref={ref}
        {...props}
      />
    )
  },
)

CarouselSlide.displayName = 'CarouselSlide'
