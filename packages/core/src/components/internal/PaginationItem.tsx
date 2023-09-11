import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface PaginationItemProps extends HTMLAttributes<HTMLInputElement> {
  index: number
}

export const PaginationItem = forwardRef<HTMLInputElement, PaginationItemProps>(
  ({ index, className, ...props }: PaginationItemProps, ref) => {
    const { currentPage, setCurrentPage, slidesPerPage } = useContext(CarouselContext)
    const isActive = index * slidesPerPage === currentPage

    const handleClick = () => {
      setCurrentPage(index * slidesPerPage)
    }

    return (
      <>
        <input
          type="radio"
          name="arc-carousel-pagination"
          className={cn(
            'appearance-none w-2 h-2 rounded-full bg-gray-300 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600',
            isActive ? 'bg-indigo-600' : 'hover:bg-indigo-400',
            className,
          )}
          onChange={handleClick}
          ref={ref}
          {...props}
        />
      </>
    )
  },
)

PaginationItem.displayName = 'PaginationItem'
