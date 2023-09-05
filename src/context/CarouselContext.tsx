import React, { createContext, useState } from 'react'

interface CarouselContextType {
  variant?: 'default' | 'full' | 'vertical' | null
  currentView: number
  setCurrentView: React.Dispatch<React.SetStateAction<number>>
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
  const [currentView, setCurrentView] = useState(0)

  const nextSlide = () => {
    setCurrentView((prev) => (prev + 1) % slideCount)
  }

  const prevSlide = () => {
    setCurrentView((prev) => (prev - 1 + slideCount) % slideCount)
  }

  return (
    <CarouselContext.Provider
      value={{
        currentView,
        setCurrentView,
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
