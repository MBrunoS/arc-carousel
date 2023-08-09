import React, { createContext, useState } from 'react'

interface CarouselContextType {
  variant?: 'default' | 'full' | 'vertical' | null
  currentSlide: number
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
  nextSlide: () => void
  prevSlide: () => void
  slideCount: number
  slidesPerView: number
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

export interface CarouselProviderProps {
  children: React.ReactNode
  slideCount: number
  slidesPerView?: number
}

export const CarouselProvider = ({
  children,
  slideCount,
  slidesPerView = 1,
}: CarouselProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
  }

  return (
    <CarouselContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        nextSlide,
        prevSlide,
        slideCount,
        slidesPerView,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
