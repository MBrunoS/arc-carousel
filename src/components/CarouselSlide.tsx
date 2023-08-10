import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef } from 'react'

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return <Comp className={cn('flex-grow', className)} ref={ref} {...props} />
  },
)

CarouselSlide.displayName = 'CarouselSlide'
