import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

export const carouselButtonVariants = cva(
  'flex items-center justify-center transition duration-150 ease-in-out rounded-full',
  {
    variants: {
      variant: {
        default:
          'text-gray-400 border border-gray-400 hover:text-gray-600 hover:border-gray-600 focus:outline-none focus:text-gray-600 focus:border-gray-600',
      },
      size: {
        small: 'w-10 h-10',
        default: 'w-12 h-12',
        large: 'w-16 h-16',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof carouselButtonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(carouselButtonVariants({ variant, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)
