import { forwardRef, useContext } from 'react'
import { CarouselContext } from 'src/context/CarouselContext'
import { Button, ButtonProps } from './internal'

export const CarouselNextButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, ...props }, ref) => {
    const { next, orientation, hasLoop, currentPage, pagesCount } = useContext(CarouselContext)

    const rightArrow = (
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
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    )

    const downArrow = (
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
          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
        />
      </svg>
    )

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      next()
      onClick?.(e)
    }

    return (
      <Button
        onClick={handleClick}
        disabled={!hasLoop && currentPage === pagesCount - 1}
        ref={ref}
        {...props}
      >
        {children ?? (orientation === 'vertical' ? downArrow : rightArrow)}
      </Button>
    )
  },
)

CarouselNextButton.displayName = 'CarouselNextButton'
