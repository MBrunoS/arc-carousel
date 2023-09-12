import React, { createContext, useState } from 'react'

interface CarouselContextType {
  orientation: 'horizontal' | 'vertical'
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  nextSlide: () => void
  prevSlide: () => void
  slideCount: number
  slidesPerPage: number
  initialPage: number
}

export const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

export interface CarouselProviderProps {
  children: React.ReactNode
  orientation: 'horizontal' | 'vertical'
  slideCount: number
  slidesPerPage?: number
  initialPage?: number
}

export const CarouselProvider = ({
  children,
  orientation,
  slideCount,
  slidesPerPage = 1,
  initialPage = 0,
}: CarouselProviderProps) => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (initialPage < 1) return 0
    else if (initialPage > slideCount) return slideCount - 1
    else return initialPage - 1
  })

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % slideCount)
  }

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + slideCount) % slideCount)
  }

  return (
    <CarouselContext.Provider
      value={{
        orientation,
        currentPage,
        setCurrentPage,
        nextSlide,
        prevSlide,
        slideCount,
        slidesPerPage,
        initialPage,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
