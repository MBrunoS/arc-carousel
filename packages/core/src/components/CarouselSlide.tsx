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
    const { slidesPerView, currentView, variant } = useContext(CarouselContext)
    const slidePercentage = 100 / slidesPerView
    const style =
      variant === 'vertical'
        ? {
            height: `${slidePercentage}%`,
            transform: `translateY(calc(${currentView * -slidePercentage}% - ${
              gap * currentView
            }px))`,
          }
        : {
            width: `${slidePercentage}%`,
            transform: `translateX(calc(${currentView * -slidePercentage}% - ${
              gap * currentView
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
