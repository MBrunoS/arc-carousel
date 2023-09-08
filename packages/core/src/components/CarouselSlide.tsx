import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ asChild, className, ...props }, ref) => {
    const { slidesPerView, currentView, variant } = useContext(CarouselContext)
    const slidePercentage = 100 / slidesPerView
    const style =
      variant === 'vertical'
        ? {
            height: `${slidePercentage}%`,
            transform: `translateY(${currentView * -slidePercentage}%)`,
          }
        : {
            width: `${slidePercentage}%`,
            transform: `translateX(${currentView * -slidePercentage}%)`,
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
