import React, { createContext, useCallback, useState } from 'react'

interface CarouselContextType {
  variant?: 'default' | 'full' | 'vertical' | null
  currentSlide: number
  nextSlide: () => void
  prevSlide: () => void
  slideCount: number
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

export interface CarouselProviderProps {
  children: React.ReactNode
  slideCount: number
}

export const CarouselProvider = ({ children, slideCount }: CarouselProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
  }, [])

  return (
    <CarouselContext.Provider
      value={{
        currentSlide,
        nextSlide,
        prevSlide,
        slideCount,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
