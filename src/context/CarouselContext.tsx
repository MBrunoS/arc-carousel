import { createContext } from 'react'

type CarouselContextType = {
  variant?: 'default' | 'full'
  activeIndex: number
  setActiveIndex: (index: number) => void
  slideCount: number
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)
