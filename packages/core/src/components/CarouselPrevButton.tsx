import { forwardRef, useContext } from 'react'
import { CarouselContext } from 'src/context/CarouselContext'
import { Button, ButtonProps } from './internal'

export const CarouselPrevButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, ...props }, ref) => {
    const { prevSlide, variant } = useContext(CarouselContext)

    const leftArrow = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    )

    const upArrow = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    )

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      prevSlide()
      onClick?.(e)
    }

    return (
      <Button onClick={handleClick} ref={ref} {...props}>
        {variant === 'vertical' ? upArrow : leftArrow}
      </Button>
    )
  },
)

CarouselPrevButton.displayName = 'CarouselPrevButton'
