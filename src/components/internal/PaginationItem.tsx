import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef, useContext } from 'react'

export interface PaginationItemProps extends HTMLAttributes<HTMLButtonElement> {
  index: number
}

export const PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ index, className, ...props }: PaginationItemProps) => {
    const { currentView, setCurrentView, slidesPerView } = useContext(CarouselContext)
    const isActive = index * slidesPerView === currentView

    const handleClick = () => {
      setCurrentView(index * slidesPerView)
    }

    return (
      <button
        className={cn(
          'w-2 h-2 rounded-full bg-gray-300 transition duration-150 ease-in-out',
          isActive ? 'bg-indigo-600' : 'hover:bg-indigo-400',
          className,
        )}
        onClick={handleClick}
        {...props}
      />
    )
  },
)

PaginationItem.displayName = 'PaginationItem'
