import { CarouselContext } from '@/context/CarouselContext'
import { useEvents } from '@/context/EventsContext'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface PaginationItemProps extends HTMLAttributes<HTMLInputElement> {
  index: number
}

export const CarouselPaginationItem = forwardRef<HTMLInputElement, PaginationItemProps>(
  ({ index, className, ...props }: PaginationItemProps, ref) => {
    const { currentPage, setCurrentPage, slidesPerPage } = useContext(CarouselContext)
    const { onPageChange } = useEvents()
    const isActive = index * slidesPerPage === currentPage

    const handleClick = () => {
      const prevIndex = currentPage
      const nextIndex = index * slidesPerPage
      onPageChange?.(prevIndex, nextIndex)
      setCurrentPage(nextIndex)
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
          {...props}
        />
      </>
    )
  },
)

CarouselPaginationItem.displayName = 'CarouselPaginationItem'
