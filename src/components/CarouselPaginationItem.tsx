import { CarouselContext } from '@/context/CarouselContext'
import { cn } from '@/lib/utils'
import { HTMLAttributes, useContext } from 'react'

export interface CarouselPaginationItemProps extends HTMLAttributes<HTMLButtonElement> {
  index: number
}

export const CarouselPaginationItem = ({
  index,
  className,
  ...props
}: CarouselPaginationItemProps) => {
  const { currentSlide, setCurrentSlide, slidesPerView } = useContext(CarouselContext)
  const isActive = index * slidesPerView === currentSlide

  const handleClick = () => {
    setCurrentSlide(index * slidesPerView)
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
}

CarouselPaginationItem.displayName = 'CarouselPaginationItem'
