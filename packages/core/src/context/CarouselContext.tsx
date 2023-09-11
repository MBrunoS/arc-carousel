import React, { createContext, useState } from 'react'

interface CarouselContextType {
  variant: 'default' | 'vertical' | null
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
  slideCount: number
  slidesPerPage?: number
  initialPage?: number
  variant?: 'default' | 'vertical' | null
}

export const CarouselProvider = ({
  children,
  slideCount,
  slidesPerPage = 1,
  initialPage = 0,
  variant = 'default',
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
        currentPage,
        setCurrentPage,
        nextSlide,
        prevSlide,
        slideCount,
        slidesPerPage,
        initialPage,
        variant,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

CarouselProvider.displayName = 'CarouselProvider'
