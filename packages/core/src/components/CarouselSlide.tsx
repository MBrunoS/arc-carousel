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
    const slidesGap = (slidesPerPage * gap - gap) / slidesPerPage // adjust for the gap between slides

    const style =
      orientation === 'vertical'
        ? {
            height: `calc(${slidePercentage}% - ${slidesGap}px)`,
            transform: `translateY(calc(${currentPage * slidesPerPage * -100}% - ${
              gap * currentPage * slidesPerPage
            }px))`,
          }
        : {
            width: `calc(${slidePercentage}% - ${slidesGap}px)`,
            transform: `translateX(calc(${currentPage * slidesPerPage * -100}% - ${
              gap * currentPage * slidesPerPage
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
