import { CarouselContext } from '@/context/CarouselContext'
import { useEvents } from '@/context/EventsContext'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface PaginationItemProps extends HTMLAttributes<HTMLInputElement> {
  index: number
}

export const CarouselPaginationItem = forwardRef<HTMLInputElement, PaginationItemProps>(
  ({ index, className, onFocus, onBlur, onKeyDown, ...props }: PaginationItemProps, ref) => {
    const { currentPage, setCurrentPage, startAutoplay, stopAutoplay, autoplay, isPaused } =
      useContext(CarouselContext)
    const { onPageChange } = useEvents()
    const isActive = index === currentPage

    const handleClick = () => {
      const prevIndex = currentPage
      const nextIndex = index
      onPageChange?.(prevIndex, nextIndex)
      setCurrentPage(nextIndex)
    }

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
      if (autoplay && !isPaused) {
        stopAutoplay()
      }
      onFocus?.(e)
    }

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
      if (autoplay && !isPaused) {
        startAutoplay()
      }
      onBlur?.(e)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault()
        return
      }
      onKeyDown?.(e)
    }

    return (
      <>
        <input
          type="radio"
          name="arc-carousel-pagination"
          className={className}
          onChange={handleClick}
          checked={isActive}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </>
    )
  },
)

CarouselPaginationItem.displayName = 'CarouselPaginationItem'
