import { HTMLAttributes, useContext } from 'react'
import { CarouselContext } from 'src/context/CarouselContext'
import { twMerge } from 'tailwind-merge'

export type CarouselNextButtonProps = {
  size?: 'small' | 'default' | 'large'
} & HTMLAttributes<HTMLButtonElement>

const sizeClasses = {
  small: 'w-10 h-10',
  default: 'w-12 h-12',
  large: 'w-16 h-16',
}

export const CarouselNextButton = ({
  size = 'default',
  className,
  onClick,
  ...props
}: CarouselNextButtonProps) => {
  const { activeIndex, setActiveIndex, slideCount } = useContext(CarouselContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(activeIndex === slideCount - 1 ? 0 : activeIndex + 1)
    onClick?.(e)
  }

  return (
    <button
      className={twMerge(
        'flex items-center justify-center text-gray-400 border border-gray-400 transition duration-150 ease-in-out rounded-full hover:text-gray-600 hover:border-gray-600 focus:outline-none focus:text-gray-600 focus:border-gray-600',
        sizeClasses[size],
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}
