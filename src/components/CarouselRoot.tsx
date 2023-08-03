import React, { HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { CarouselContext } from 'src/context/CarouselContext'

export type CarouselRootProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'full'
}

export const CarouselRoot = ({ variant, children, className, ...props }: CarouselRootProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideCount = React.Children.count(children)

  return (
    <CarouselContext.Provider value={{ variant, activeIndex, setActiveIndex, slideCount }}>
      <div className={twMerge('flex overflow-x-auto', className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}
