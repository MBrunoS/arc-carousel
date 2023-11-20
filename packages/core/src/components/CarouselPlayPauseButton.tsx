import { forwardRef, useContext } from 'react'
import { CarouselContext } from 'src/context/CarouselContext'
import { Button, ButtonProps } from './internal'

export const CarouselPlayPauseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, ...props }, ref) => {
    const { startAutoplay, stopAutoplay, isPaused, setIsPaused, autoplay } =
      useContext(CarouselContext)

    if (!autoplay) return null

    const play = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="arc-w-6 arc-h-6"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    )

    const pause = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="arc-w-6 arc-h-6"
      >
        <path
          fillRule="evenodd"
          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
          clipRule="evenodd"
        />
      </svg>
    )

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isPaused) {
        setIsPaused(true)
        stopAutoplay()
      } else {
        setIsPaused(false)
        startAutoplay()
      }
      onClick?.(e)
    }

    return (
      <Button
        onClick={handleClick}
        ref={ref}
        aria-label={isPaused ? 'Start slide autoplay' : 'Pause slide autoplay'}
        {...props}
      >
        {children ?? (isPaused ? play : pause)}
      </Button>
    )
  },
)

CarouselPlayPauseButton.displayName = 'CarouselPlayPauseButton'
