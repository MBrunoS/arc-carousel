import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'flex items-center justify-center transition duration-150 ease-in-out rounded-full',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
